import React, {FC} from 'react';
import {Button as BButon} from 'antd';

import { ButtonProps } from 'antd/lib/button/button'
import './Button.scss'
import classNames from "classnames";

interface IButtonProps {
  classname?: string;
  type?: ButtonProps["type"];
  children?: React.ReactNode;
  size?: ButtonProps["size"];
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <BButon {...props} className={classNames('button', props.classname, {
      'button--large': props.size === "large"
    })}  />
    )
};
export default Button;