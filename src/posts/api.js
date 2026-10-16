import {useEffect,useState} from 'react';
const url=(process.env.REACT_APP_SUPABASE_URL||'').replace(/\/$/,'');
const key=process.env.REACT_APP_SUPABASE_ANON_KEY||'';
export async function postsRequest(query='',method='GET',body,token){
 if(!url||!key)throw new Error('文章服务尚未配置');
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
 try{const response=await fetch(url+'/rest/v1/posts'+query,{method,headers:{apikey:key,'Content-Type':'application/json',Prefer:'return=representation',...(token?{Authorization:'Bearer '+token}:{})},signal:controller.signal,...(body?{body:JSON.stringify(body)}:{})});
 const data=await response.json().catch(()=>null);
 if(!response.ok)throw new Error(response.status===401?'登录已过期，请重新登录':response.status===403?'没有操作权限，请确认登录状态':data&&data.code==='PGRST205'?'文章数据库尚未初始化': '文章服务请求失败，请稍后重试');
 return data||[];}catch(e){if(e.name==='AbortError')throw new Error('文章服务响应超时，请重试');throw e;}finally{clearTimeout(timer);}
}
export function asArticle(row){return {...row,author:row.author_name,date:row.created_at.slice(0,10),minutes:Math.max(1,Math.ceil(row.body.length/500)),level:'社区文章',prereq:'对本文主题感兴趣',outcome:row.summary,practice:row.practice||0};}
export function usePosts(){const [rows,setRows]=useState([]),[error,setError]=useState(''),[loading,setLoading]=useState(true),[version,setVersion]=useState(0);
 useEffect(()=>{let live=true;setLoading(true);setError('');postsRequest('?select=*&order=created_at.desc&limit=100').then(data=>{if(live)setRows(data.map(asArticle));}).catch(e=>{if(live)setError(e.message);}).finally(()=>{if(live)setLoading(false);});return()=>{live=false;};},[version]);
 return {rows,error,loading,retry:()=>setVersion(v=>v+1)};
}
