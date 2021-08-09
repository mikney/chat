import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"

const LoginForm = () => {
  return (
    <div>
      <div className="auth__content">
        <div className="auth__top">
          <h2>Войти в приложение</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={undefined}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Пожалуйста введите назхвание почты!' }]}
            validateStatus={"success"}
            hasFeedback={true}
          >
            <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Пожалйста введите пароль!' }]}
            validateStatus={"success"}
          >
            <Input
              size='large'
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button size={'large'} type={'primary'}>
              Войти в аккуант
            </Button>
          </Form.Item>
          <Link  className='auth__register-link' to={'/register'}>Зарегистррироваться</Link>
        </Form>
      </Block>
    </div>

  );
};

export default LoginForm;