import React, {FC} from 'react';
import chekedSvg from "../../assets/img/cheked.svg";
import noread from "../../assets/img/noread.svg";

interface Interface {
  isMe?: boolean,
  isRead?: boolean
}

const IconRead: FC<Interface> = ({isMe, isRead}) => {
  return (
    <>
      {isMe && (isMe && isRead ? (
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
        ))
      }
    </>
  );
};

export default IconRead;