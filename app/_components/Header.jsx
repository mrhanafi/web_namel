import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between pt-5 mx-20'>
        <Link href={'/'}>
            <Image src={'/namelLogo.svg'} width={70} height={70} alt='logo'
            className=''
            />
        </Link>
    </div>
  )
}

export default Header