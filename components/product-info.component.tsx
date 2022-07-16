import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const productImage = encodeURI(image);
  return (
    <>
      <div className='w-full bg-white p-4 shadow-md space-y-2 h-full'>
        {/* image */}
        <div className='flex justify-center'>
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

        <hr className='py-2' />

        {/* product tags */}
        <p className='font-light'>Tags:</p>
        <div className='grid grid-cols-3 text-ellipsis ... items-center ring-2 ring-slate-500 py-4  rounded-lg'>
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

        <div className='flex justify-around pt-4'>
          <button
            className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer'
            onClick={() => router.push(productImage)}
          >
            View Image
          </button>
          <button
            className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer'
            onClick={() =>
              router.push(
                'https://www.amazon.com/Nutribullet-Superfood-Nutrition-Extractor-NBR-0601/dp/B07CTBHQZK/ref=sr_1_1?crid=30SKHCGY99KOD&keywords=nutribullet&qid=1658013068&sprefix=nutribullet%2Caps%2C167&sr=8-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc'
              )
            }
          >
            Go To Product
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
