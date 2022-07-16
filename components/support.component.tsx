import React from 'react';

const Support = () => {
  return (
    <div className='grid space-y-4'>
      <h1 className='font-bold text-xl'>Contact Support</h1>
      <form action='' method='post' className='space-y-2'>
        <div className='grid grid-cols-1 gap-4'>
          <div className='col-span-1 grid'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' className='border-2 border-slate-500 rounded-xl p-2'/>
          </div>
          <div className='col-span-1 grid'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols={30} rows={10} className='border-2 border-slate-500 rounded-xl p-2'/>
          </div>
        </div>
        {/* submit button */}
        <div className='grid grid-cols-1 gap-4'>
          <div className='col-span-1'>
            <button className='bg-slate-400 rounded-xl text-white px-2 py-1' type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Support;
