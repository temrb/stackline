import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='sticky top-0 z-20 flex h-16 items-center w-full px-6 bg-slate-800'>
      <div className='flex items-center w-full'>
        <Image
          src='/stackline_logo.svg'
          alt='Stackline'
          height={90}
          width={90}
          objectFit='contain'
        />
      </div>
    </header>
  );
};

export default Header;
