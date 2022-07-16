import React from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setSupportModal } from '../redux/features/utilsSlice';

interface RootState {
  utils: any;
}

const Header = () => {
  const support = useAppSelector(
    (state: RootState) => state.utils.supportModal
  );
  console.log(
    '🚀 ~ file: header.component.tsx ~ line 12 ~ Header ~ support',
    support
  );

  return (
    <header className='sticky top-0 z-20 flex justify-between h-16 items-center w-full px-6 bg-slate-800'>
      <div className='flex items-center'>
        <Image
          src='/stackline_logo.svg'
          alt='Stackline'
          height={90}
          width={90}
          objectFit='contain'
        />
      </div>
      <button
        className='flex text-white font-bold'
        onClick={() => useAppDispatch(setSupportModal(!support))}
      >
        {support ? 'Cancel' : 'Contact Support'}
      </button>
    </header>
  );
};

export default Header;
