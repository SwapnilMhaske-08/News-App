  import './App.css';
import Navbar from './navbar';
import News from './news';
import Newsdata from './newsdata';
// import React, { useEffect, useState } from 'react';


function App() {

      // const [data, setData] = useState([]); 
      // const [loading, setLoading] = useState(true);
  
      // useEffect(() => {
      //     fetch('https://newsdata.io/api/1/news?apikey=pub_635031f8dfedfcd1866ea8b447113b762127f&language=en&category=technology')
      
      //     .then(res => res.json())
      //         .then(response => {
                 
      //             setData(Array.isArray(response.results) ? response.results : []);
      //             setLoading(false);
      //         })
      //         .catch(error => {
      //             console.error("Error fetching news:", error);
      //             setLoading(false);
      //             setData([]); 
      //         });
      // }, []);
  return (
    <div className="App">
      <Navbar />
      <Newsdata/>
    </div>
  );
}

export default App;
