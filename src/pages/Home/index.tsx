import React from 'react';
import './Home.scss'
import Message from "../../components/Message";

const Home = () => {
  return (
    <div className='home'>
      <Message
        avatar={"https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/EWf-mLtZ-iyeS8_0SVgHt-aaFvEE0gWAEJ3SrVqRJ8P07F8GqmdA4ngyE6Aan7X_EiOz-qqnx1ryI7A4pIfMi9mo.jpg?size=50x0&quality=96&crop=269,216,1891,1891&ava=1"}
        text="Привет, ну как у тебя дела??))"
        date="Thu Aug 05 2021 19:41:17"
        isMe={false}
        isRead={false}
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
        isRead={false}
      />
    </div>
  );
};

export default Home;