import {IError} from '../modules/RegisterForm/components/RegisterForm'



interface Interface {
  [index: string ]: (errors: any, value: any) => void;
  email: (errors: IError, value : string) => void;
}



export const validation = (values: IError, isAuth: boolean) => {
  const errors: IError = {}


  if (values.hasOwnProperty('firstName')){
    if (!values.firstName) {
      errors.firstName = 'Поле не должно быть пустым';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'имя должно быть меншь 15 символов';
    }
  }

  if (values.hasOwnProperty('email')){
    if (!values.email) {
      errors.email = 'Введите почту';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Не валидное название почты';
    }
  }

  if (values.hasOwnProperty('password')) {
    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/.test(values.password)) {
      errors.password = 'Не валидный пароль'
    }
  }

  if (values.hasOwnProperty('rePassword')) {
    if (!values.rePassword) {
      errors.rePassword = 'Повторите пароль';
    } else if (values.password !== values.rePassword) {
      errors.rePassword = 'Пароли не совпадают'
    }
  }
  return errors;

}
// export const validation = (isAuth: boolean): Interface  =>  (
//   {
//   firstName: (errors, value) : void => {
//     if (!value) {
//       errors.firstName = 'Поле не должно быть пустым';
//     } else if (value.length > 15) {
//       errors.firstName = 'имя должно быть меншь 15 символов';
//     }
//   },
//   email: (errors, value) => {
//     if (!value) {
//       errors.email = 'Введите почту';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//       errors.email = 'Не валидное название почты';
//     }
//   }
//
// }
// )