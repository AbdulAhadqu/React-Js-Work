import React, { useEffect, useState } from "react";
import axios from "axios";

function Rendering() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);
  const [Id, setId]= useState (0);
  const [finaldata, setFinaldata]= useState({});

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(() => console.log("Error"));
  }, []);
  function filterdata (e){
    e.preventDefault();
      const update = data.find((e)=>
      e.id=== Id
      );
     setFinaldata(update);
     setId(0);
  }
   
  function searcher (e){
    e.preventDefault();
    setId(parseInt(e.target.value));
   
  }
  

  return (
    <>
      <div>
        GET DATA
      </div>
      <form onSubmit={filterdata}>
      <label>Enter the name:</label><br/>
      <input type='number' placeholder="Enter the number" value={Id} onChange={searcher} ></input>
      <button type="submit">Submit</button></form>
      {/* <p>{finaldata}</p> */}
      <div>
        <p>{finaldata.name}</p>
        <p>{finaldata.email}</p>
        <p>{finaldata.website}</p>
        <p>{finaldata.company?.name}</p>

             {/* {finaldata.address.street}, 
                {finaldata.address.city}, 
                {finaldata.address.zipcode}
                  */}
      </div>
      
    </>
  );
}

export default Rendering;
