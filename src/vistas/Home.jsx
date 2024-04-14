import { useContext } from "react"
import { BirdsContext } from "../context/BirdsContext"
import MyCard from "../components/MyCards"

const Home = () =>{
    const {birds} = useContext(BirdsContext)

    return(
<div className="container">
       <div className="row mt-4">
        <div className="row mt-4">
        <h2>Aves Chilenas</h2>
        </div>
       
       {birds && 
       birds.map((bird) => <MyCard key={bird.uid} bird={bird} />)}

       </div>
       </div>
    )


}

export default Home