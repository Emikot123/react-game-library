import {useState, useEffect} from 'react'
import './Main.css'

function Main(){
    let [games, setGames] = useState([]);

    return(
        <div className={'main'}>
            <div className="top">
                <button className={'add'}>Add Game</button>
                <button className={'clear'}>Clear</button>
            </div>
            <div className="games">
                <ul>

                </ul>
            </div>


        </div>
    )
}

export default Main;