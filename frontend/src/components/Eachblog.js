import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import '../../static/css/index.css';


export default function Eachblog() {
    
    const [blog, setBlog] = useState([])
    const location = useLocation();
    const id = location.state.id
    console.log(id)

    useEffect (() => {
            fetch('http://127.0.0.1:8000/Blog_App/read/'+id, {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(resp => {console.log(resp); 
                setBlog(resp);
            })
                  
    },[id])

    return (      
        <div className='container col-6 my-5 py-5'>                                        
            <div className='my-3 '>
                    <h3><strong>{blog.title}</strong></h3><br/>
                    <div className='row'>
                        <p className='float-start'>{blog.name}<br/>{blog.date}</p>
                    </div>
                    <p>{blog.description}</p>
                    
            </div>                                  
        </div>
    
    )
    
};