import {FC} from "react"

interface IAccountForm {
    text: string
    name: string
}
const AccountForm: FC<IAccountForm> = ({name, text}) => {
  return (
     <>
        <div className='border border-gray-400 flex flex-col'>
            <label htmlFor={name}>{name}</label>
            <input type={text}/>
        </div>
     </>
  )
}
export default AccountForm