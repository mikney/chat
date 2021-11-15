import React, {FC} from 'react';
import {Button as BButon} from 'antd';

import { ButtonProps } from 'antd/lib/button/button'
import './DialogItem.scss'
import {adaptationDate} from '../../Utils/adaptationDate'
import classNames from "classnames";
import IconRead from "../IconRead/IconRead";
import colorAvatarHash from "../../Utils/colorAvatarHash";
import Avatar from "../Avatar/Avatar";

// interface IButtonProps {
//   classname: string;
//   type?: ButtonProps["type"];
//   children: React.ReactNode;
//   size?: keyof ButtonProps["size"];
// }
type typeUser = {
  _id: any
  avatar?: string
  fullName: string,
  isOnline?: boolean
}
type typeMessage = {
  text?: string,
  created_at?: string
}
interface IDialogItem {
  classname?: string
  user: typeUser,
  online?: boolean,
  unread?: number,
  isMe: boolean,
  avatar?: string,
  created_at?: string,
  text?: string
}

console.log(colorAvatarHash('3abe'))

const DialogItem: FC <IDialogItem>  = ({text, created_at, children, classname, online, user,unread, isMe,avatar}) =>
  <div>
    <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline })}>
       <div className="dialogs__item-avatar">
         <Avatar user={user} />
         {/*<img*/}
         {/*  src={'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/FK9tQ6Ko_o-d6EnWPeF5UHogtwM_EtSoD7f4HNB26QsHhgywhG7_Io35aI6OozQhBrutVivWW3vc8i2ploZItCsd.jpg?size=100x0&quality=96&crop=300,0,1079,1079&ava=1'}*/}
         {/*  alt={'Зови сменя'}*/}
         {/*/>*/}
         {/*<img src={user.avatar} alt={`${user.fullname} avatar`}/>*/}
       </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullName}</b>
          <span>
             {created_at && adaptationDate(created_at)}
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>
            {text}
          </p>
          {isMe && <IconRead isMe={true} isRead={true} />}
          {unread && unread !> 0 ? <div className="dialogs__item-info-bottom-count">
            {unread}
          </div>
            : null
          }
        </div>
      </div>
    </div>
  </div>
;
export default DialogItem;