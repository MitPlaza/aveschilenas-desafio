import { useContext } from "react"
import { BirdsContext } from "../context/BirdsContext"
import MyCard from "../components/MyCards"

const Favoritos = () =>{
    const {birds} = useContext(BirdsContext)

    return(
<div className="container mt-4">
 
       <div className="row mt-4">
       <div className="row  mt-4"><h2>Aves Chilenas Favoritas</h2></div>

       
       {birds && 
       birds.filter(bird => bird.like).map((bird) => 

        <MyCard key={bird.uid} bird={bird}/>)}

       </div>
       </div>
    )


}

export default Favoritos