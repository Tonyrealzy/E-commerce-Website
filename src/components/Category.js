import React from 'react';

const Category = ({id, title, onCategoryClick}) => {
  return (
    <div className='py-1 md:py-2 text-green text-xs md:text-sm hover:text-dark' key={id} onClick={() => onCategoryClick(id)}>
        {title}
    </div>
  )
};

export default Category;