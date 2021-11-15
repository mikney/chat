import React, {FC, useRef, useState} from 'react';
import './Message.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import classNames from "classnames";
import chekedSvg from "../../assets/img/cheked.svg"
import noread from "../../assets/img/noread.svg"
import {adaptationDate} from '../../Utils/adaptationDate'
import IconRead from '../IconRead/IconRead'
import waveSvg from '../../assets/img/wave.svg'
import playSvg from '../../assets/img/play_icon.svg'
import pauseSvg from '../../assets/img/pause_icon.svg'
import {convertTime} from '../../Utils/convertTime'
type obj = {
  fullname: string
}
type Attachment =  {
  filename: string
  url: string
}
interface Interface {
  avatar: string
  text?: string
  date?: string
  user?: obj
  isMe?: boolean
  isRead?: boolean
  attachments?: Attachment [],
  isTyping?: boolean
  audio?: any
}
const Message: FC <Interface> = ({avatar, date,text, user, isMe, isRead, attachments, isTyping,audio}) => {

  const [isPlay, setPlay] = useState(false)
  const audioElem = useRef <any>(null)
  const [time, setTime] = useState(0.0)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    //@ts-ignore
    audioElem.current.volume = 0.05;
    //@ts-ignore
    isPlay ? audioElem.current.pause() : audioElem.current.play()
    setPlay(!isPlay)

    //@ts-ignore
    // audioElem.current.play()
  }

  console.log(audioElem?.current?.currentTime )

  function onTimeHandler(e: any) {
    setTime(e.target.currentTime)
    setProgress( e.target.currentTime / e.target.duration * 100)
  }

  function onEndedHandler() {
    setProgress(0)
    setTime(0.0)
    setPlay(false)
  }

  return (
    <div className={classNames('message', {
      'message--isme': isMe,
      'message--is-typing': isTyping,
      'message--image': attachments?.length === 1,
      'message--is-audio': audio
    })}>
      <div className="message__content">
        <IconRead isMe={isMe} isRead={isRead} />
        {/*{isMe && (isMe && isRead ? (*/}
        {/*  <img*/}
        {/*    src={chekedSvg}*/}
        {/*    alt="icon checked"*/}
        {/*    className={"message__icon-readed"}*/}
        {/*  />*/}
        {/*):*/}
        {/*  (*/}
        {/*    <img*/}
        {/*      src={noread}*/}
        {/*      alt="icon checked"*/}
        {/*      className={"message__icon-readed message__icon-readed--no"}*/}
        {/*    />*/}
        {/*  ))*/}
        {/*}*/}

        <div className="message__avatar">
          <img src={avatar} alt={`User ${user?.fullname}`}/>
        </div>
        <div className="message__info">
          {( audio || text || isTyping) && <div className="message__bubble">
            <p className="message__text">{text}</p>
            {!isMe && isTyping && < div className="message__typing">
              <span />
              <span />
              <span />
            </div>
            }
            {
              audio && <div className="message__audio">
                <audio onTimeUpdate={(e:any) => onTimeHandler(e)} onEnded={() => onEndedHandler()} onPause={() => console.log('PAUSE')} ref={audioElem} src={audio} preload={"auto"}/>
                <div className="message__audio-progress" style={{width: `${progress}%`}} />
                <div className="message__audio-info">
                  <div className="message__audio-btn">
                    <button onClick={() => togglePlay()}>
                      {isPlay ? <img src={pauseSvg} alt=""/> : <img src={playSvg} alt=""/>}
                    </button>
                  </div>
                  <div className="message__audio-wave"><img src={waveSvg} alt="wave"/></div>
                  <span className="message__audio-duration">
                    {/*{audioElem?.current?.currentTime}*/}
                    {convertTime(time)}
                </span>
                </div>
              </div>
            }
          </div>}
          {attachments && <div className="message__attachments">
            {
              attachments.map(item => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename}/>
                </div>
              ))
            }
          </div> }
          {date && <span className="message__date">
            {adaptationDate(date)}
          </span>}


        </div>
      </div>
    </div>
  );
};

export default Message;