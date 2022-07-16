import React from 'react';
import Image from 'next/image';

interface RootState {
  product: any;
}

interface Props {
  image: string;
  title: string;
  subtitle: string;
  tags?: string[];
}

const ProductInfo = ({ image, title, subtitle, tags }: Props) => {
  return (
    <>
      <div className='w-full bg-white p-4 shadow-md space-y-2 h-full'>
        {/* image */}
        <div className='flex justify-center'>
          {/* wait for image to load */}
          {image && (
            <Image
              src={image}
              alt={title}
              height={150}
              width={150}
              objectFit='contain'
              loading='lazy'
            />
          )}
        </div>

        {/* product text */}
        <div className='flex-col space-y-2'>
          <div className='font-bold flex justify-center text-xl'>{title}</div>
          <div className='font-light flex text-sm justify-center text-center'>
            {subtitle}
          </div>
        </div>

        {/* product tags */}
        <div className='grid grid-cols-3 text-ellipsis ... space-y-2 items-center'>
          {tags?.map((tag: string) => (
            <div
              key={tag}
              className='font-semibold flex justify-center text-sm'
            >
              <span className='font-extralight'>#</span>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
