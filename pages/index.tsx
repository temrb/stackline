import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/header.component';
import ProductInfo from '../components/product-info.component';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { fetchProductData } from '../redux/features/productSlice';
import SalesGraph from '../components/sales-graph.component';

interface RootState {
  product: any;
}

const Home: NextPage = () => {
  const product = useAppSelector((state: RootState) => state.product);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    useAppDispatch(fetchProductData());
    if (product.status === 'success') {
      setLoad(false);
    } else {
      setLoad(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Stackline</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* header */}
      <Header />
      {!load ? (
        <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100'>
          loading...
        </div>
      ) : (
        <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100'>
          <main className='flex w-full flex-1'>
            <div className='grid lg:grid-cols-4 grid-cols-1 p-4 gap-4 w-full '>
              <div className='...'>
                <ProductInfo
                  image={product.data[0]?.image}
                  title={product.data[0]?.title}
                  subtitle={product.data[0]?.subtitle}
                  tags={product.data[0]?.tags}
                />
              </div>
              <div className='lg:col-span-3 ...'>
                <SalesGraph sales={product.data[0]?.sales} />
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Home;
