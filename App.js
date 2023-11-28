import React,{useState} from 'react'
import axios from 'axios';
import Gallery from './Gallery';

const App = () => {
  const[data,setData]=useState([]);
  const apiKey="636e1481b4f3c446d26b8eb6ebfe7127";
  const[search,setSearch]=useState("");
  const changeHandler=e=>{
    setSearch(e.target.value);
  
  };
  const submitHandler=e=>{
    e.preventDefault();
    axios.get( `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      response=>setData(response.data.photos.photo)
    )
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
      <center>
        <h1>gallery</h1>
      <input type="text" value={search} onChange={changeHandler}></input><br/>
      <br/>
      <input type="submit" name="search"  ></input>
      </center>
      </form>
      <br/>
     {data.length>1?<Gallery data={data}/>:<h3>no data found</h3>}
    </div>
    
  )
}

export default App
