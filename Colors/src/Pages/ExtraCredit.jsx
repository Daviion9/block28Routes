

import { useParams } from "react-router"
export default function Color(){
    const { color } = useParams()
    const style = {
        backgroundColor: color || "orange",
        color: "orange"
    }
    
    return(
        <div style={style}>
            <h1>{color}</h1>
        </div>
    )
}