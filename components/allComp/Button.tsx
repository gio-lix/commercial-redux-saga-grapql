import {FC, MouseEventHandler} from "react"

interface IButton {
    text: string
    onClick:  MouseEventHandler<HTMLButtonElement> | undefined
}
const Button: FC<IButton> = ({text, onClick}) => {

  return  (
      <button onClick={onClick}
          className='w-52 rounded-2xl  h-10 font-bold border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white'
      >
          {text}
      </button>
      )


}
export default Button