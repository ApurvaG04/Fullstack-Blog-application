import '../../static/css/index.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../../static/css/index.css';

export default function Read() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([])
    
    useEffect (() => {
        fetch('http://127.0.0.1:8000/Blog_App/read', {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp =>  setBlogs(resp))
            .catch(error => {
                if (error.resp) {
                    console.log(error.resp)
                }
            })
    },[])
    
    const handleClick = (element) => {
        console.log('Button clicked!',  element.id);
        navigate("/read/blog", {state: {id:  element.id}})
        
    }

    return (
        <div className='container'>
            <h1 className='text-center py-5'>Blogs</h1>
                <div className="list-group px-5" >
                    {blogs.map((element) => {
                        return(
                            <div key={element.id} className='card container my-3 py-3' onClick={()=>handleClick(element)}>
                                <br/>
                                {/* <a href="/read/blog"  key={element.id} className="fw-semibold fs-4" aria-current="true">{element.title}</a> */}
                                <a  className="fw-semibold fs-4" aria-current="true">{element.title}</a>
                                <div >
                                    <p >{element.name}<br/>
                                    {element.date}</p>
                                </div>                            
                            </div>
                        );
                    })}
                </div>
        </div>
        
   );
}