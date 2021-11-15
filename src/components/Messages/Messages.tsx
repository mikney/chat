import React, {FC} from 'react';
import {Empty} from "antd";
import Message from "../Message";
//@ts-ignore
import AudioTest from "../../assets/audio/test.mp3";
interface Interface {
  items?: any
}


const Messages: FC<Interface> = ({items}) => {
  return (
    <div>
      {
    items?.length ?
      <>
        <Message
          avatar={"https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/EWf-mLtZ-iyeS8_0SVgHt-aaFvEE0gWAEJ3SrVqRJ8P07F8GqmdA4ngyE6Aan7X_EiOz-qqnx1ryI7A4pIfMi9mo.jpg?size=50x0&quality=96&crop=269,216,1891,1891&ava=1"}
          text="Привет, ну как у тебя дела?? Как ты отдохнул рассказывай))"
          date="Thu Aug 05 2021 19:41:17"
          isMe={false}
          isRead={false}
          attachments={[
            {
              filename: 'image.jpg',
              url: "https://source.unsplash.com/user/erondu/100x100/?random=1"
            },
            {
              filename: 'image.jpg',
              url: "https://source.unsplash.com/user/erondu/100x100/?random=2"
            },
            {
              filename: 'image.jpg',
              url: "https://source.unsplash.com/user/erondu/100x100/?random=3"
            },
          ]}
        />
        <Message
          avatar={"https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/FK9tQ6Ko_o-d6EnWPeF5UHogtwM_EtSoD7f4HNB26QsHhgywhG7_Io35aI6OozQhBrutVivWW3vc8i2ploZItCsd.jpg?size=100x0&quality=96&crop=300,0,1079,1079&ava=1"}
          text="Да, все хорошо ты как??))"
          date="Thu Aug 05 2021 19:41:17"
          isMe={true}
          isRead={true}
        />


        <Message
          avatar={"https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/EWf-mLtZ-iyeS8_0SVgHt-aaFvEE0gWAEJ3SrVqRJ8P07F8GqmdA4ngyE6Aan7X_EiOz-qqnx1ryI7A4pIfMi9mo.jpg?size=50x0&quality=96&crop=269,216,1891,1891&ava=1"}
          attachments={[
            {
              filename: 'image.jpg',
              url: "https://source.unsplash.com/user/erondu/150x150/?random=1"
            },
          ]}
          date="Thu Aug 05 2021 19:41:17"
        />
        <Message
          avatar={"https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/EWf-mLtZ-iyeS8_0SVgHt-aaFvEE0gWAEJ3SrVqRJ8P07F8GqmdA4ngyE6Aan7X_EiOz-qqnx1ryI7A4pIfMi9mo.jpg?size=50x0&quality=96&crop=269,216,1891,1891&ava=1"}
          isMe={false}
          isRead={false}
          audio={AudioTest}
          date="Thu Aug 05 2021 19:41:17"
        />
        <Message
          avatar={"https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/FK9tQ6Ko_o-d6EnWPeF5UHogtwM_EtSoD7f4HNB26QsHhgywhG7_Io35aI6OozQhBrutVivWW3vc8i2ploZItCsd.jpg?size=100x0&quality=96&crop=300,0,1079,1079&ava=1"}
          text="Да, все хорошо ты как??))"
          date="Thu Aug 05 2021 19:41:17"
          isMe={true}
          isRead={true}
        />
        <Message
          avatar={"https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/FK9tQ6Ko_o-d6EnWPeF5UHogtwM_EtSoD7f4HNB26QsHhgywhG7_Io35aI6OozQhBrutVivWW3vc8i2ploZItCsd.jpg?size=100x0&quality=96&crop=300,0,1079,1079&ava=1"}
          text="Да, все хорошо ты как??))"
          date="Thu Aug 05 2021 19:41:17"
          isMe={true}
          isRead={true}
        />
        <Message
          avatar={"https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/FK9tQ6Ko_o-d6EnWPeF5UHogtwM_EtSoD7f4HNB26QsHhgywhG7_Io35aI6OozQhBrutVivWW3vc8i2ploZItCsd.jpg?size=100x0&quality=96&crop=300,0,1079,1079&ava=1"}
          text="Да, все хорошо ты как??))"
          date="Thu Aug 05 2021 19:41:17"
          isMe={true}
          isRead={true}
        />
        <Message
          avatar={"https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/FK9tQ6Ko_o-d6EnWPeF5UHogtwM_EtSoD7f4HNB26QsHhgywhG7_Io35aI6OozQhBrutVivWW3vc8i2ploZItCsd.jpg?size=100x0&quality=96&crop=300,0,1079,1079&ava=1"}
          text="Да, все хорошо ты как??))"
          date="Thu Aug 05 2021 19:41:17"
          isMe={true}
          isRead={true}
        />
        <Message
          avatar={"https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/FK9tQ6Ko_o-d6EnWPeF5UHogtwM_EtSoD7f4HNB26QsHhgywhG7_Io35aI6OozQhBrutVivWW3vc8i2ploZItCsd.jpg?size=100x0&quality=96&crop=300,0,1079,1079&ava=1"}
          text="Да, все хорошо ты как??))"
          date="Thu Aug 05 2021 19:41:17"
          isMe={true}
          isRead={true}
        />
      </>
    : <Empty

    description={'Нет сообщений'}
  />

  }
    </div>
  )
};

export default Messages;