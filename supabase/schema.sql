-- 拾分文章数据库：在 Supabase SQL Editor 中运行全文。
begin;
create table if not exists public.posts (
 id uuid primary key default gen_random_uuid(),
 author_id uuid not null references auth.users(id) on delete cascade,
 author_name text not null check (char_length(author_name) between 1 and 80),
 title text not null check (char_length(trim(title)) between 2 and 120),
 summary text not null check (char_length(summary) between 1 and 300),
 body text not null check (char_length(trim(body)) between 20 and 100000),
 category text not null check (category in ('前端','后端','开发工具')),
 goal text not null check (goal in ('解决问题','学习原理','准备面试','项目实战')),
 practice integer not null default 0 check (practice between 0 and 120),
 created_at timestamptz not null default now()
);
alter table public.posts enable row level security;
revoke all on public.posts from anon, authenticated;
grant select on public.posts to anon, authenticated;
grant insert (author_id,author_name,title,summary,body,category,goal,practice) on public.posts to authenticated;
grant update (title,summary,body,category,goal,practice) on public.posts to authenticated;
grant delete on public.posts to authenticated;
drop policy if exists posts_read on public.posts;
create policy posts_read on public.posts for select to anon,authenticated using (true);
drop policy if exists posts_create on public.posts;
create policy posts_create on public.posts for insert to authenticated with check ((select auth.uid())=author_id);
drop policy if exists posts_edit on public.posts;
create policy posts_edit on public.posts for update to authenticated using ((select auth.uid())=author_id) with check ((select auth.uid())=author_id);
drop policy if exists posts_delete on public.posts;
create policy posts_delete on public.posts for delete to authenticated using ((select auth.uid())=author_id);
create index if not exists posts_created_at_idx on public.posts(created_at desc);
create index if not exists posts_author_idx on public.posts(author_id);
commit;
