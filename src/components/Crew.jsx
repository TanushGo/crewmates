import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from '../client'
const Crew = () => {
    let params = useParams();

    const [crew, setCrew] = useState({name: " ", color: " ", speed: 0})

    const getCrew = () => {{setCrew({name :"leo",color:"Red", speed : 10, id:"399939"})}}
    
    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
            .from('crewmates')
            .select('*')
            .eq("id", params.id)

            setCrew(data);
        }
        fetchPost();
  
    }, []); 
    return (<div>
        {
            crew?
            <div><h1>Crewmate: {crew.name}</h1>
            <h1>Stats:</h1>
            <h2>color : {crew.color}</h2>
            <h2>speed : {crew.speed}</h2>
            <Link to={'/crew/'+ params.id +"/edit"}><button>Edit Crewmate</button></Link></div>
             : <div><h2>This crewmate doesn't exist!</h2> </div>
        }
        
        <button onClick={getCrew}>get</button>
    </div>
    )
}

export default Crew;