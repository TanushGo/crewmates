import { supabase } from '../client'
import { useState } from 'react'

const Create = () => {
   
    const [crew, setCrew] = useState({name: "", color: "", speed: 0})

    const handleChange = (event) => {
        
        const {name, value} = event.target;
     
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrew = async (event) => {
        event.preventDefault();

       const { error } = await supabase
        .from('crewmates')
        .insert({name :crew.name, color: crew.color, speed: crew.speed})
        .select()

        if (error) {
            console.log(error);
        }
        console.log(crew)
        window.location = "/";}

    return (<div>
        <h1>Create a new crewmate!</h1>
        <img src="src/assets/crewmates.43d07b24.png" height="100px" width="auto"></img>
        <br></br>
        <form className="form-container">
            <div className="mini-container">
                <label id='Name'><h3>Name:</h3></label>
                <input type="text" name="name" placeholder="Enter crewmate's name" value ={crew.name} onChange={handleChange}/>
            </div>
            <div className="mini-container">
                <label id='Speed'><h3>Speed (mph):</h3></label>
                <input type="text" name="speed" placeholder="Enter speed in mph" value ={crew.speed} onChange={handleChange} />
            </div>
            <div className="mini-container">
                <label id='Color'><h3>Color:</h3></label>
                <li><input id="Red" name="color" type="radio" value="Red" onChange={handleChange}/>Red</li>
                <li><input id="Green" name="color" type="radio" value="Green" onChange={handleChange}/>Green</li>
                <li><input id="Blue" name="color" type="radio" value="Blue" onChange={handleChange}/>Blue</li>
                <li><input id="Purple" name="color" type="radio" value="Purple" onChange={handleChange}/>Purple</li>
                <li><input id="Yellow" name="color" type="radio" value="Yellow" onChange={handleChange} />Yellow</li>
                <li><input id="Orange" name="color" type="radio" value="Orange" onChange={handleChange} />Orange</li>
                <li><input id="Pink" name="color" type="radio" value="Pink" onChange={handleChange} />Pink</li>
                </div>
                
            </form>
            <button type='submit' onClick={createCrew}>Create Crewmate!</button>
            
    </div>
    )
}

export default Create;