
import { useEffect, useState } from 'react';
import './App.css';
import Artworks from './components/Artworks';
import LoadingMask from './components/LoadingMask';




function App() {
  
  const [data,setData] = useState([])

  const apiKey = `6bdd0f06-3c54-4960-b04d-4ad36cf5eea4`

  const fetchData = () =>{
    fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=100`)
      .then(res => res.json())
      .then((data) => {
    setTimeout(() =>{
      setData(data)
    },2000)})
  }
    console.log(data)
  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="App">
     
       {data.records? <Artworks data={data}/> : <LoadingMask/>} 
    </div>
  );
}

export default App;
