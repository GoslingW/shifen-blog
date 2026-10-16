import React from 'react';
import '@testing-library/jest-dom';
import {render,fireEvent,screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {AuthProvider,AuthPage} from './index';
function setup(path){render(<MemoryRouter initialEntries={[path]}><AuthProvider><AuthPage/></AuthProvider></MemoryRouter>);}
test('unconfigured login gives actionable failure instead of fake success',async()=>{setup('/login');fireEvent.change(screen.getByLabelText('邮箱'),{target:{value:'reader@example.com'}});fireEvent.change(screen.getByLabelText('密码'),{target:{value:'example-password'}});fireEvent.submit(screen.getByRole('button',{name:'登录'}).closest('form'));expect(await screen.findByRole('alert')).toHaveTextContent('账号服务尚未开通');});
test('registration rejects mismatched passwords before sending',async()=>{setup('/register');fireEvent.change(screen.getByLabelText('昵称'),{target:{value:'测试读者'}});fireEvent.change(screen.getByLabelText('邮箱'),{target:{value:'reader@example.com'}});fireEvent.change(screen.getByLabelText('密码'),{target:{value:'example-password'}});fireEvent.change(screen.getByLabelText('确认密码'),{target:{value:'different-password'}});fireEvent.submit(screen.getByRole('button',{name:'创建账号'}).closest('form'));expect(await screen.findByRole('alert')).toHaveTextContent('两次输入的密码不一致');});
