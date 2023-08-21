import {useEffect,useState} from "react"
import Presentacional from "./Presentacional"

function Container () {

const [data,setData] = useState([])

useEffect (()=> {getProductos(setData)},[])

const getProductos = () => {
    fetch('https://api.punkapi.com/v2/beers')
     .then(res=>res.json())
     .then(json=>setData(json))
     .catch((error) => {alert(error)})
}

return (<Presentacional data={data}/>)
}

export default Container