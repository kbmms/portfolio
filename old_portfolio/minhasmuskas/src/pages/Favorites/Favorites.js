
import React, { useEffect, useState } from "react"
import './Favorites.css'
import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router-dom'
export default function Favorites(){
    const [fav, setFav] = useState([]);
    useEffect(()=>{
        const musicStorage = localStorage.getItem('newFav');
        if(musicStorage){
            setFav(JSON.parse(musicStorage))
        }
    }, [])
    console.log(fav)
    return(
        <div>

        <div>
            <h1>Favoritos</h1>
            <Link style={{color:"#fff", textDecoration:'none', fontSize:13}} to="/">VOLTAR</Link>
        </div>
        
        <div className="favorites-main">
            {fav.length < 1 &&
                <h1>Adicione suas múscias na página inicial</h1>
            }
           {fav.map((item)=>(
               <div className="favorites-card">
                   <h3>{item.title}</h3>
                   <h4>{item.album.title}</h4>
                   <img src={item.album.cover_medium} alt="" />
                   <ReactAudioPlayer controls src={item.preview} />
               </div>
           )).sort().reverse()}
        </div>
        </div>
    )
}