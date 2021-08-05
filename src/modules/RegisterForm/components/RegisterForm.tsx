import React, {useState} from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import { UserOutlined, MailOutlined, LockOutlined,InfoCircleTwoTone } from '@ant-design/icons';
import {Link} from "react-router-dom"
const RegisterForm = () => {
  const [isLogin, setLogin] = useState(true)

  return (
    <div>
      <div className="auth__content">
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
      </div>
      <Block>
        {isLogin ? <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={undefined}
          >
            <Form.Item>
              <Input size='large' prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="E-mail"/>
            </Form.Item>
            <Form.Item>
              <Input
                size='large'
                prefix={<UserOutlined className="site-form-item-icon"/>}
                type="text"
                placeholder="Ваше имя"
              />
            </Form.Item>
            <Form.Item
            >
              <Input
                size='large'
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item
            >
              <Input
                size='large'
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button size={'large'} type={'primary'}>
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className='auth__register-link' to={'/login'}>Войти в аккаунт</Link>
          </Form>
          :
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{fontSize: '50px'}}/>
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
          </div>}
      </Block>
    </div>

  );
};

export default RegisterForm;