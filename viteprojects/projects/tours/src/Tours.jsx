/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Tour from "./Tour"
const Tours=({tours,removetour})=> {
  return (
    <section>
        <div className='title'>
            <h2>our tours</h2>
            <div className="underline"></div> 
        </div>
        <div>
            {tours.map((tour)=>(
                <Tour key={tour.id} {...tour} removetour={removetour}></Tour>
            ))}
        </div>
    </section>
  )
}

export default Tours
