import React, {FC, useState} from 'react';
//@ts-ignore
import Dialogs from "../components/Dialogs/Dialogs";
import {log} from "util";
import {Empty} from "antd";




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
  userId: number | string
}


const DialogFilter: FC<IDialogs> = ({ items, userId }) => {
  const [inputValue, setValue] = useState('')
  const [filtered, setFilteredItems] = useState(Array.from(items));


  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    console.log(value)
    setFilteredItems(items.filter(dialog => {
      return dialog.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0
    }))
    setValue(value)
  }
  return (
    <Dialogs items={filtered} userId={userId} onSearch={onChangeInput} inputValue={inputValue} />
  );
};

export default DialogFilter;