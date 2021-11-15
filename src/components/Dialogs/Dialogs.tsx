import React, {FC} from 'react';
import DialogItem from "../DialogItem";
import {Input, Empty} from 'antd';
import {SearchProps} from 'antd/lib/input'
import './Dialogs.scss'


type obj = {
  _id: number | string
  text?: string,
  created_at: string,
  user: {
    _id: any
    avatar?: string
    fullName: string,
    isOnline?: boolean
  },
}
interface IDialogs {
  items: obj[],
  userId: any,
  // onSearch: SearchProps["onSearch"]
  onSearch: any
  inputValue?: string

}



const Dialogs: FC<IDialogs> = ({items, userId, onSearch}) => {
  return (
    <div className='dialogs'>
      <div className="dialogs__search">
        <Input
          placeholder={'Поиск по контактам'}
          onChange={onSearch}

        />
      </div>


      {
        items.length ?items.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)).map(item => (
          <DialogItem
            key={item._id}
            user={item.user}
            isMe={item.user._id === userId}
            avatar={item.user.avatar}
            created_at={item.created_at}
            text={item.text}
          />
        ))
          : <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={'Ничего не найдено'}
          />
      }
    </div>
  );
};

export default Dialogs;