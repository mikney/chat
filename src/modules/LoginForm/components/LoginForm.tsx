import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import { UserOutlined,MailOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import {validation as validateFunc} from "../../../Utils/validation";
import {IError} from "../../RegisterForm/components/RegisterForm";
import {useFormik} from "formik";
import {log} from "util";

const LoginForm = () => {

  const validate: any = (values: any) : any => {
    return validateFunc(values,true)
  };
  const formik= useFormik ({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      alert('Ny sho')
    },
  })
  console.log(formik)
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
          // initialValues={{ remember: true }}
          onFinish={formik.handleSubmit}
        >
          <Form.Item
            validateStatus={formik.errors.email && formik.touched.email ? "error" : "success"}
            help={ formik.touched.email && formik.errors.email }
          >
            <Input
              id="email"
              size='large'
              prefix={<MailOutlined className="site-form-item-icon"/>}
              placeholder="E-mail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </Form.Item>
          <Form.Item
            validateStatus={formik.errors.password && formik.touched.password ? "error" : "success"}
            help={ formik.touched.password && formik.errors.password }
          >
            <Input
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              size='large'
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            {formik.isValid ? 'Hello' : "poshel naxyi"}
            <Button htmlType='submit' size={'large'} type={'primary'}>
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