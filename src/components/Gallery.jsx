import { supabase } from '../client'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Gallery.css"

const Gallery = () => {

    const [crew, setCrew] = useState([]);

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
            {
                crew && crew.length > 0 ?
                crew.map((i,index) => 
                   <Card id={i.id} name={i.name} speed={i.author} color={i.color}/>
                ) : <div><h2>{'Make crewmates for your gallery!'}</h2> 
                <Link to="/create"><button>Create</button></Link></div>
            }
        </div>  
    )
}


export default Gallery;