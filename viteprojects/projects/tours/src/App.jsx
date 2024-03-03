import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  const removetour = (id)=>{
    const newtour=tours.filter((tour)=>tour.id!=id)
    settours(newtour)
  }


  const fetchTours = async () => {
    setloading(true);
    const data=await  fetch(url)
    const t= await data.json();
    setloading(false)
    settours(t)
  }

    useEffect(() => {
      fetchTours();
    }, []);

    if (loading) {
      return (
        <main>
          <Loading />
        </main>
      );
    }
    if(tours.length==0){
      return (
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={()=>fetchTours()}>reload</button>
          </div>
        </main>
      )
    }
    return (
      <main>
        <Tours tours={tours} removetour={removetour}/>
      </main>
    );
  }

export default App;
