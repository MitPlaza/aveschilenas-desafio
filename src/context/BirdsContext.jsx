import {createContext,useEffect,useState} from "react";

export const BirdsContext = createContext();

const BirdsProvider = ({children}) => {

const [birds, setBirds] = useState([])

const getData = async() =>{
    const response = await fetch("https://aves.ninjas.cl/api/birds")
    const data = await response.json()
    const allData = data.map(birds => ({...birds,like: false}))
    
    setBirds(allData)
    console.log(allData)
 
}

useEffect(() => {
    getData()
}, [])

return(
    <BirdsContext.Provider  value={{birds, setBirds}}>
        {children}
    </BirdsContext.Provider>
)

}

export default BirdsProvider