import {FC, useState} from "react"
import img1 from '../../public/images/home.jpg'
import img2 from '../../public/images/men.jpg'
import Image from "next/image";
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'

interface IHomePage {

}
const HomePage: FC<IHomePage> = () => {
    const [count, setCount] = useState<number>(0);
    const images = [
        {id:1, image: img1},
        {id:2, image: img2}
    ]
    const handleClickPhotos = () => {
        if (count === images.length - 1) {
            setCount(0)
        }else {
            setCount(count + 1)
        }
    }
    const handleClickMinusPhotos = () => {

        if (count === 0) {
            setCount(images.length - 1)
        }else {
            setCount(count - 1)
        }
    }
  return (
     <>
         <div>
             <div className='relative '>
                 <img src={images[count].image.src} className='aspect-video ' alt=""/>
                 <div className='absolute w-full h-full z-30 flex items-center justify-between top-0 left-0 px-10'>
                     <button className='p-3 hover:bg-black hover:bg-opacity-40' onClick={handleClickMinusPhotos}>
                         <AiOutlineLeft className='text-6xl text-white' />
                     </button>
                     <div className='text-3xl font-bold text-white bg-black w-52 h-14 whitespace-nowrap flex items-center justify-center'>{count === 0 ? (
                         <h4>Shop Womens</h4>
                     ) : (
                         <h4>Shop Mens</h4>
                     )}</div>
                     <button className='p-3 hover:bg-black hover:bg-opacity-40'  onClick={handleClickPhotos}>
                         <AiOutlineRight className='text-6xl text-white' />
                     </button>
                 </div>
             </div>
         </div>
     </>
  )
}
export default HomePage