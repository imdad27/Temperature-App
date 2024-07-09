import React,{useState} from "react";
function App() {
  const [temperature,setTemperature] = useState(0);

  const handleIncrement = () => {
    setTemperature( temperature + 1 )
  }
  const handleDecrement = () => {
    setTemperature( temperature - 1 )
  }

  return (
    <>
    <div className="container">
     <div className="card p-2 bg-light" style={{ width: "11rem" }}>
       <h1 
        className= {`card text-light  ${
          temperature > 0 ?  "bg-danger" : "bg-info"
        }`}
        style={{
          height:"150px",
          width:"150px",
          border:"2px solid #666",
        }}
        >
          {temperature} ° C
        </h1>
        <div className="d-flex">
          <button className="btn btn-dark btn-lg m-2" onClick={handleDecrement}>-</button>
          <button className="btn btn-dark btn-lg m-2" onClick={handleIncrement}>+</button>
        </div>
     </div>    
    </div>    
    </>
  );
}

export default App;
