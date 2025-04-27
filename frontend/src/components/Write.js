import React, { useState, useEffect } from "react";
import '../../static/css/index.css';
import { useNavigate } from "react-router-dom";
import '../../static/css/index.css';

export default function Write() {
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const csrfToken = ""

    const navigate = useNavigate()

    const createBlog = () => {
        const opts = {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                // "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({
                "title":title,
                "description":description,
                "name":name,
                // "X-CSRFToken": "rlUGcMG8IsSFOU1VBOMUo07rFsxJcAeN"
            })
        }
        fetch('http://127.0.0.1:8000/Blog_App/write/', opts)
            .then(resp => {
                if(resp.status === 200){
                    alert("Blog created successfully");
                    navigate('/read');
                    window.location.reload(false)
                    return resp.json()  
                }                      
            })
            .catch(error => {
                if (error.resp) {
                    console.log(error.resp)
                }
            })
        }
    

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <h1 className="display-5 text-center fw-bold lh-1 mb-3">Write Blog</h1>
            <div className='ut-jrnl'>
                <div className="form-floating py-3">
                    <input type="title" value={title} onChange={(event) => setTitle(event.target.value)} text={title} name="title" id="floatingTitle" className="form-control" placeholder="Please enter a title ..." />
                    <label className="form-label" htmlFor="floatingTitle">Title</label>
                </div>
                
                    <textarea type="description" value={description} rows="15" onChange={(event) => setDescription(event.target.value)} text={description} name="description" className="form-control" id="floatingDescription" placeholder="Please enter description ..."/>
                    {/* <label htmlFor="floatingDescription">Description</label> */}

                <div className="form-floating py-3">
                    <input type="name" value={name} onChange={(event) => setName(event.target.value)} text={name} name="password" className="form-control" id="floatingName" placeholder="Please enter your name ..."/>
                    <label htmlFor="floatingName">Name</label>
                </div>
                <input type="hidden" name="csrfmiddlewaretoken" value="rlUGcMG8IsSFOU1VBOMUo07rFsxJcAeN"></input>
                <button className="btn btn-primary py-3" onClick={createBlog} type="button">Create</button>
            </div>
        </div>
    );
}