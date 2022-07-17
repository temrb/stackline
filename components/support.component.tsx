import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  email: string;
  message: string;
}

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmitCredentials: SubmitHandler<IFormInput> = async (data) => {
    alert('Thank you for your message!');
  };

  return (
    <div className='grid space-y-4'>
      <h1 className='font-bold text-xl'>Contact Support</h1>
      <form className='space-y-2'>
        <div className='grid grid-cols-1 gap-4'>
          <div className='col-span-1 grid'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='border-2 border-slate-500 rounded-xl p-2'
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && (
              <p className='text-red-500'>Email Required</p>
            )}
          </div>
          <div className='col-span-1 grid'>
            <label htmlFor='message'>Message</label>
            <textarea
              cols={30}
              rows={10}
              className='border-2 border-slate-500 rounded-xl p-2'
              {...register('message', {
                required: true,
              })}
            />
            {errors.message && (
              <p className='text-red-500'>Message Required</p>
            )}
          </div>
        </div>

        {/* submit button */}
        <div className='grid grid-cols-1 gap-4'>
          <div className='col-span-1'>
            <button
              className='bg-slate-400 rounded-xl text-white px-2 py-1'
              onClick={handleSubmit(onSubmitCredentials)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Support;
