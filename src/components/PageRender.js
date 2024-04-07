import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PageRender = () => {
    const [results, setResults] = useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setResults(data);
        })
    }, [])

  return (
    <div>
      <Navbar/>
      <Sidebar sidebarElements = {results}/>
    </div>
  )
}

export default PageRender;