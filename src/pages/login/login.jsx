import React, { Component } from 'react'
import logo from './imgs/logo.png';
import './css/login.less'
import { Form, Input, Button } from 'antd';
import '../../App.less'
import { UserOutlined,LockOutlined } from '@ant-design/icons'
export default class Login extends Component {
    //验证通过
    handleSubmit=(value)=>{
        //value是一个对象 为表单数据

    }
    render() {
        return (
            <div className='login'>
                <header>
                    <img src={logo} alt="logo" />
                    <h1>后台管理-杨坤</h1>
                </header>
                <section>
                    <h1>用户登录</h1>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.handleSubmit}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户',
                                },
                                {
                                    max:12,
                                    message:'用户名必须12字符以内'
                                },
                                {
                                    min:4,
                                    message:"用户名4个字符以上"
                                },
                                {
                                    pattern:/^\w+$/,
                                    message:'用户名必须是字母数字下划线'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}}/>} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                                {
                                    min:4,
                                    message:"密码4个字符以上"
                                }
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined style={{color:'rgba(0,0,0,.25)'}}/>} />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
