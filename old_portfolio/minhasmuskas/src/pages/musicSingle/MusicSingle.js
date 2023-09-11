import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player';
export default function MusicSingle(){
    
    const [mysingle, setMysingle] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        
        async function loadSingle(){
            let response = null;
            try{
                response = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,{
                    headers:{
                        "x-rapidapi-key": "2c2c184f96msh1a94b9d80f1253ap1c3ca7jsnd78690428f06",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "useQueryString": true
                    },
                })
            }catch(erro){
                console.log(response.data)
            };
            setMysingle(response.data);
        }
        loadSingle();

    }, [])

    return(
        <div>{
            }
           {!mysingle ? 
            (<div>Carregando...</div>):
            (<div>
                {
                    !mysingle.error ? 
                    (<div>
                        <h1>{mysingle.album.title}</h1>
                        <img src={mysingle.album.cover_big} alt="" />
                        <h4>{mysingle.title}</h4>
                        <ReactAudioPlayer controls src={mysingle.preview} />
                        <p><Link to="/">Inicio</Link></p>
                        <p><Link to="/favoritos">Favoritos</Link></p>
                    </div>):
                    (<div>
                        <h1>Houve um erro, tente novamente mais tarde!</h1>
                        <Link to="/">Inicio</Link> <Link to="/favoritos">Favoritos</Link>
                    </div>)
                }

            </div>)
           }
          
      
           
        </div>
    )
}