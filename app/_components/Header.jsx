import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between pt-5 mx-20'>
        <div>
            <Image src={'/namelLogo.svg'} width={70} height={70} alt='logo'
            className=''
            />
        </div>
        <div>
            asdasdasd
        </div>
    </div>
  )
}

export default Header