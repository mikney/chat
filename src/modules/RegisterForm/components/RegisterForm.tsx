import React, {FC, useState} from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import { UserOutlined, MailOutlined, LockOutlined,InfoCircleTwoTone } from '@ant-design/icons';
import {Link} from "react-router-dom"
import { useFormik, FormikErrors, FormikConfig } from 'formik';
import {Value} from "classnames";
import {validation as validateFunc} from '../../../Utils/validation'

interface Interface {

}
type Form = ReturnType<typeof useFormik>
interface FormValues {
  email: string;
  password: string;
}
export interface IError {
  firstName?: any | string, email?: any | string, password?: any | string, rePassword?: any | string
}
const RegisterForm: FC = () => {

  const validate: any = (values: any) : any => {

    return validateFunc(values, true)
    //Object.keys(values).forEach((item) => (validation)[item] && (validation)[item](errors, values[item]))
    // if (!values.firstName) {
    //   errors.firstName = 'Поле не должно быть пустым';
    // } else if (values.firstName.length > 15) {
    //   errors.firstName = 'имя должно быть меншь 15 символов';
    // }
    // if (!values.email) {
    //   errors.email = 'Введите почту';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Не валидное название почты';
    // }
    // if (!values.password) {
    //   errors.password = 'Введите пароль'
    // } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/.test(values.password)) {
    //   errors.password = 'Не валидный пароль'
    // }
    // if (!values.rePassword) {
    //   errors.rePassword = 'Повторите пароль';
    // } else if (values.password !== values.rePassword) {
    //   errors.rePassword = 'Пароли не совпадают'
    // }

  };

  const [isLogin, setLogin] = useState(true)
  const formik= useFormik ({
    initialValues: {
      email: '',
      firstName: '',
      password: '',
      rePassword: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      alert('Ny sho')
    },
  })
  console.log(formik)
  // console.log(formik.errors.email)
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
            // initialValues={{remember: true}}
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
              validateStatus={formik.errors.firstName && formik.touched.firstName ? "error" : "success"}
              help={ formik.touched.firstName && formik.errors.firstName }
            >
              <Input
                id="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                size='large'
                prefix={<UserOutlined className="site-form-item-icon"/>}
                type="text"
                placeholder="Ваше имя"
              />
            </Form.Item>
            <Form.Item
              validateStatus={formik.errors.password && formik.touched.password ? "error" : "success"}
              hasFeedback={true}
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

            <Form.Item
              validateStatus={formik.errors.password !== formik.errors.rePassword && formik.touched.rePassword? "error" : "success"}
              help={formik.touched.rePassword && formik.errors.rePassword}
            >
              <Input
                id='rePassword'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
                size='large'
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
                placeholder="Повторите пароль"
              />

            </Form.Item>
            <Form.Item>
              {(formik.dirty && formik.isValid) && <span>Заполните все поля</span>}
              <Button   htmlType='submit'  size={'large'} type={'primary'}>
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