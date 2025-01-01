import { DataBot, DataVisual } from "../../Common/Components";
import "./Home.scss"
export function Home(){
    return(
        <div className="main-conatiner">
           <DataBot/>
           <DataVisual />
        </div>
    )
}