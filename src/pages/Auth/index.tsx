import React from 'react';
import {Block, Button} from "../../components";
import {LoginForm} from "../../modules"
import './auth.scss'
import {
  Switch,
  Route,
} from "react-router-dom";

import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import RegisterForm from "../../modules/RegisterForm";


const Auth = () => {
  return (
    <section className='auth'>
      <div className="auth__content">
        <Switch>
          <Route exact component={LoginForm} path={['/', '/login']} />
          <Route exact  component={RegisterForm} path={'/register'} />
        </Switch>
      </div>
    </section>
  );
};

export default Auth;