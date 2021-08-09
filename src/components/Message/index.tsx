import React, {FC} from 'react';
import './Message.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import classNames from "classnames";
import chekedSvg from "../../assets/img/cheked.svg"
import noread from "../../assets/img/noread.svg"
type obj = {
  fullname: string
}
type Attachment =  {
  filename: string
  url: string
}
interface Interface {
  avatar: string
  text: string
  date: string
  user?: obj
  isMe: boolean
  isRead: boolean
  attachments?: Attachment []
}
const Message: FC <Interface> = ({avatar, date,text, user, isMe, isRead, attachments}) => {
  return (
    <div className={classNames('message', {'message--isme': isMe})}>
      <div className="message__content">
        {isMe && isRead ? (
          <img
            src={chekedSvg}
            alt="icon checked"
            className={"message__icon-readed"}
          />
        ):
          (
            <img
              src={noread}
              alt="icon checked"
              className={"message__icon-readed message__icon-readed--no"}
            />
          )
        }

        <div className="message__avatar">
          <img src={avatar} alt={`User ${user?.fullname}`}/>
        </div>
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          <div className="message__attachments">
            {
              attachments?.map(item => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename}/>
                </div>
              ))
            }
          </div>
          <span className="message__date">
            {formatDistanceToNow(Date.parse(date), { addSuffix: true ,locale: ruLocale})}
          </span>


        </div>
      </div>
    </div>
  );
};

export default Message;