import { Link } from "react-router-dom"
export function Nav(){
    return (<div style={{width: "100%", backgroundColor: "#21202c", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", display: "flex", justifyContent: "space-around", padding: "12px"}}>
        <Link to={"/welcome"}>Items</Link>
        <Link to={"/community"}>Community</Link>
    </div>)
}