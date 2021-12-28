import { useRef } from "react";
import { useState } from "react/cjs/react.development"

export const Form = () => {
    const [form, setForm] = useState(null);
    const ref = useRef(null);

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        console.log(ref.current.files)
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
    }


    return(
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleChange} 
                name="username" 
                type="text" 
                placeholder="Enter Your Name" />
            <input 
                onChange={handleChange} 
                name="age"
                type="number" 
                placeholder="Enter Your Age" />
            <input 
                onChange={handleChange} 
                name="address" 
                type="text" 
                placeholder="Enter Your address" />
                
            <input ref={ref} onChange={handleChange} type="file" />
            
            <input type="submit" value="submit" />
        </form>
    )
}