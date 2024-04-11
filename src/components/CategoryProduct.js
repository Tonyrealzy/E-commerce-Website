import React from 'react';

const CategoryProduct = ({title, image, specs}) => {
  return (
    <div>
        <section>
          {title}
        </section>

        <figure>
          <img src={`./e-commerce-app/public/assets/${image}`} alt={title}></img>
        </figure>

        <aside>
          <section>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
          </section>
          
          {specs.capacity && 
          <section>
          <h3>Capacity</h3>
          <label>{specs.capacity}</label>
          </section>
          }
          
        </aside>
    </div>
  )
}

export default CategoryProduct