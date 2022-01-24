import {FC} from "react"
import Link from 'next/link'

interface IHeader {

}
const Header: FC<IHeader> = () => {
  return (
     <>
      <header className='fixed z-10 w-full h-20 bg-white  flex  items-center px-10'>
          <div className='flex justify-between  w-full text-gray-500'>
              <h5 className='font-bold '>E_COMM</h5>
              <div>
                  <nav>
                      <ul>
                          <li>
                              <Link href='/' >
                                  <a>Home</a>
                              </Link>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>
      </header>
     </>
  )
}
export default Header