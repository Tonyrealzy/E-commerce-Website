import React from 'react';

const MainSection = ({result}) => {
  return (
    <div>
        <section className='flex-grow font-normal text-xs md:text-sm px-4 py-2'>{result}
        </section>
    </div>
  )
}

export default MainSection