import React from 'react'
import Image1 from '../images/headline/juan-encalada-2BalskDOoLg-unsplash_thumbnail.png'
import Image2 from '../images/headline/christian-bowen-6r8BDlXtytg-unsplash.jpg'
import Image3 from '../images/headline/kaushal-mishra-p76UivR30oo-unsplash.jpg'

const Headline = () => {
  return (
    <div className='flex w-full h-full'>
        <div className='flex justify-center'>
        <div className=''>
            <h1>Beautiful clothes for your new borns</h1>
            <h1>Beautiful clothes for your new borns</h1>
            <h1>Beautiful clothes for your new borns</h1>
        </div>
        <div className=''>
           <img src={Image1} alt="cute baby on bed" width={100} height={100}/>
           <img src={Image2} alt="cute baby in picnic" width={100} height={100}/>
           <img src={Image3} alt="cute baby cuddling up" width={100} height={100}/>
        </div>
        </div>
    </div>
  )
}

export default Headline;