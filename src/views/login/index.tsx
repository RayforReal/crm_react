import bgImg from '@/assets/svg/login/login-bg.svg';
import logo from '@/assets/svg/login/logo.svg';
import {Button, Form, Input} from 'antd';
import React from "react";

type FieldType = {
    username: string;
    password: string;
    code: string;
};

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


const Login: React.FC = () => {
    return (
        <div style={{backgroundImage: 'url(' + bgImg + ')'}}
             className='bg-no-repeat bg-center bg-cover h-full flex flex-row-reverse items-center'>
            <div className='w-340px flex flex-col items-center relative right-120px'>
                <div
                    className='w-242px h-64px bg-hex-43C1C0 rounded-t-8px absolute -top-40px flex justify-center pt-4px'>
                    <img src={logo} alt="" className='h-35px'/>
                </div>
                <div className='backdrop-blur-27px backdrop-filter rounded-10px bg-hex-FFFFFF4C w-full px-48px py-32px'>
                    <span className='text-16px'>登录</span>
                    <Form
                        className='mt-24px'
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <Form.Item<FieldType>
                            name="username"
                            rules={[{required: true, message: '请输入用户名'}]}>
                            <Input placeholder='请输入用户名'/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name="password"
                            rules={[{required: true, message: '请输入密码'}]}>
                            <Input.Password placeholder='请输入密码'/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name="code"
                            rules={[{required: true, message: '请输入验证码'}]}>
                            <div className='flex items-center'>
                                <Input.Password placeholder='请输入验证码' className='w-1/2 mr-8px'/>
                                <img src="" alt="获取验证码失败" className='cursor-pointer w-1/2'/>
                            </div>
                        </Form.Item>
                        <Form.Item className='mb-0'>
                            <Button type="primary" htmlType="submit" className='w-full rounded-20px h-36px'>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;
