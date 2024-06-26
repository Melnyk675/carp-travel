import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/common.json'
import logo from '../../public/icons/logo.png'

const Logo = () => {
  return (
    <Link href='/' className='flex flex-col text-white text-sm font-normal font-karantina tracking-normal cursor-pointer hover:scale-125 focus:scale-125 transition-all duration-300 ease-in-out outline-none focus:outline-none'>
      <Image
        src={logo}
        alt='travel logo'
        width={100}
        height={100}
        loading='lazy'
        className='w-[59px] h-[21px]'
        aria-label="logo"
      />
      {data.logoText}
    </Link>
  );
};

export default Logo;