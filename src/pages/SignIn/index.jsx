import React, { useEffect, useState } from 'react';
 import logo from "../../assets/images/logo.svg";
import './style.scss';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import userApi from '../../service/user';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    userApi.login(values).then((response) => {
      console.log(response)
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    }).catch((error) => {
      console.log(error);
    })
  };
  const onFinishFailed = (errorInfo) => {

    console.log('Failed:', errorInfo);



  };


  return (
    <div className='signIn_wrapper'>
      <div className='signIn_container shadow-lg'>
        <div className='signIn_header'>
           <img src={logo} className='logo' alt="Logo" /> 
          <p>Ebgub.uz</p>
        </div>

        <div className='form'>
          <Form
            name="basic"
            style={{
              maxWidth: '100%',
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Foydalanuvchi nomi"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Iltimos foydalanuvchi nomini kiriting!',
                },
              ]}
            >
              <Input placeholder='Foydalanuvchi nomi...' />
            </Form.Item>

            <Form.Item
              label="Parol"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Iltimos parolni kiriting!',
                },
              ]}
            >
              <Input.Password placeholder='Parol...' type='text' />
            </Form.Item>

            <Form.Item
              name="see"
            >
              <Checkbox>Parolni ko'rish</Checkbox>
            </Form.Item>
            <Form.Item >
              <div className="buttons">
                <Button type="danger" htmlType="submit" onChange={onFinish}>
                  Tasdiqlash
                </Button>
                <Link to='/' >  <Button type="warning" htmlType="submit" onChange={onFinish}>
                  Ortga qaytish
                </Button></Link>
              </div>


            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUp