import {FC, SyntheticEvent} from "react"
import Link from 'next/link'
interface ILoginPage {

}
const LoginPage: FC<ILoginPage> = () => {


  return (
     <section className='w-2/6 h-auto flex flex-col  border border-black'>
         <h4 className='text-center font-bold'>LOGIN</h4>
             <div className='flex justify-center my-8 '>
                 <Link href="/api/auth/login">
                     <a  className='w-52 h-10 font-bold border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white'
                     >Sign In With Google</a>
                 </Link>
             </div>
     </section>
  )
}
export default LoginPage