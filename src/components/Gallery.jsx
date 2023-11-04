import { supabase } from '../client'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Gallery.css"
import Card from './Card';

const Gallery = () => {

    const [crew, setCrew] = useState({name: "", color: "", speed: 0})

    const getCrew = () => {{setCrew([{name :"leo",color:"Red", speed : 10, id:"399939"}])}}
    
    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
            .from('crewmates')
            .select('*')
            .order('created_at', { ascending: true })

        setCrew(data);
        }
        fetchPost();
    }, []); 
    
    
    return (
        <div className="crewmate-container ">
            <button onClick={getCrew}>get</button>
            {
                crew && crew.length > 0 ?
                crew.map((i,index) => 
                   <Card id={i.id} name={i.name} speed={i.speed} color={i.color} key={i.id}/>
                ) : <div><h2>{'Make crewmates for your gallery!'}</h2> 
                <Link to="/create"><button>Create</button></Link></div>
            }
        </div>  
    )
}


export default Gallery;