import React, {FC} from 'react';
import {Button as BButon} from 'antd';

import { ButtonProps } from 'antd/lib/button/button'
import './Block.scss'
import classNames from "classnames";

// interface IButtonProps {
//   classname: string;
//   type?: ButtonProps["type"];
//   children: React.ReactNode;
//   size?: keyof ButtonProps["size"];
// }
interface Interface {
    classname?: string
}

const Block: FC <Interface>  = ({children, classname}) =>

    <div className={classNames('block', classname)} >{children}</div>

;
export default Block;