import React, {FC, useState} from "react";
import { Button, Input } from "antd";
import {SmileOutlined, CameraOutlined, AudioOutlined, CheckCircleOutlined} from '@ant-design/icons';
import './ChatInput.scss'



const ChatInput: FC = ({}) => {
  const [value, setValue] = useState("");

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button size='large' type="link" shape="circle" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={e => setValue(e.target.value)}
        size="large"
        placeholder="Введите текст сообщения…"
      />
      <div className="chat-input__actions">
        <Button size='large' type="link" shape="circle" icon={<CameraOutlined />} />
        {value ? (
          <Button size='large'  type="link" shape="circle" icon={<CheckCircleOutlined />} />
        ) : (
          <Button size='large' type="link" shape="circle" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

export default ChatInput;