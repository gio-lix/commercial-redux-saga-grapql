import {FC} from "react"
import Link from 'next/link'
import {useRouter} from "next/router";
import {useUser} from "@auth0/nextjs-auth0";

interface IHeader {

}
const Header: FC<IHeader> = () => {
    const router = useRouter()
    const {user, error, isLoading} = useUser()
  return (
     <>
      <header className=' w-full h-20 bg-white  flex  items-center px-10'>
          <div className='flex justify-between  w-full text-gray-500'>
              <h5 onClick={() => router.push('/')} className='font-bold '>E_COMM</h5>
              <div>
                  <nav>
                      <ul className='flex space-x-5'>
                          <li>
                              <Link href='/account/register' >
                                  <a>Register</a>
                              </Link>
                          </li>
                          {(!isLoading && !user) && (
                              <li>
                                  <Link href='/account/login' >
                                      <a className='bg-red-200'>Login</a>
                                  </Link>
                              </li>
                          )}
                          {(!isLoading && user) && (
                              <button>
                                  <a href="/api/auth/logout">Logout</a>
                              </button>
                          )}

                      </ul>
                  </nav>
              </div>
          </div>
      </header>
     </>
  )
}
export default Header