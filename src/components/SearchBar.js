import React from 'react';
import { useNavigate } from 'react-router-dom';

const searchIcon = () => (
    <svg height={10} width={10}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </svg>
);

const SearchBar = () => {
    const [searchTerm, setSearchItem] = React.useState('');

    const navigate = useNavigate();

    React.useEffect(() => {
        const delay = setTimeout(() => {
            if (searchTerm) {
                navigate('/search?s=' + searchTerm);
            }
        }, 500);

        return () => clearTimeout(delay);
    }, [searchTerm, navigate]);

    const handleChange = (ev) => {
        setSearchItem(ev.target.value);
    };

  return (
    <div className='mt-1 text-xs md:text-sm relative'>
        <span className='absolute top-1 left-1 md:top-2 md:left-2'>{searchIcon()}</span>
        <input className='text-dark w-16 md:w-28 pl-4 md:pl-6 py-0.5 md:py-1 rounded-sm outline-none' type='search' name='searchBar' placeholder='Search' onChange={handleChange} />
    </div>
  )
}

export default SearchBar;