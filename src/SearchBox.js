import React, { useState ,useEffect} from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";



export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [search,setSearch] = useState("");
  const [error,setError] = useState("");
  const [result,setResult] = useState([]);
  const [clientId ,setClientId]= useState("4j83ZG5auzE5C1x6nhQ1qgpPZNMq1LRCed8fx-Hj-74");
  const searchPhotos =  (e) => {
    if (search !== "") {
      setQuery(search);
    }
    else{
      document.getElementById("empty").style.visibility = "visible";

    }
    

    e.preventDefault();
    
  };
const url = "https://api.unsplash.com/search/photos?page=4&query="+query+"&client_id="+clientId;
  useEffect(()=>{
    axios.get(url)
    .then(res =>{
      setResult(res.data.results);
      // console.log(result);

    })
    .catch(err =>{  
      setError(err)

    })
  },[error,result,url,search]);


  return (
    <Container fluid style={{ textAlign: "center" }}>
      <form className="form" onSubmit={searchPhotos}>
        <Row style={{ justifyContent: "center" }}>
          <Col >
            <label className="label" htmlFor="query">
              {" "}
              📷
            </label>
            
            <input
              type="text"
              name="query"
              className="input input-lg"
              style={{
                fontSize: "15px",
                color:"grey",
                width: "400px",
                border:"1px solid red",
                borderTop: "4px solid red",
                borderBottom:"1px solid red",
                padding:"5px 10px 5px 10px" }}
              placeholder={`Try "dog" or "apple"`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit" className="button">
              Search
            </button>
          </Col>
        </Row>
      </form>
      <label id = "empty" style={{color:"red",visibility:"hidden"}} >Enter search object</label>

      <div className = "cardlist " style = {{marginTop:"50px"}}>
     {result.map((photo)=>(
      <div className="card">
              <img
                className="card--image"
                alt={photo.alt_description}
                src={photo.urls.small}
              ></img>
            </div>
     ))}
     </div>
     
    </Container>
   
  );
}
