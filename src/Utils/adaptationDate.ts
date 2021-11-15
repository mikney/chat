import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import {isToday} from "date-fns";

export const  adaptationDate  = (date: string) => {
  // if (Date.now() - Date.parse(date) > 24*60*60*1000) {
  //   return format(Date.parse(date), "dd.MM.yy", { locale: ruLocale})
  // }
  if (!isToday(Date.parse(date))) {
    return format(Date.parse(date), "dd.MM.yy", { locale: ruLocale})
  }

    // console.log(Date.now() - Date.parse(date))
  //return format(Date.parse(date), "dd.MM.yy", { locale: ruLocale})
  return format(Date.parse(date), "HH:mm", { locale: ruLocale})
  // formatDistanceToNow(Date.parse(date), {addSuffix: true, locale: ruLocale})

}