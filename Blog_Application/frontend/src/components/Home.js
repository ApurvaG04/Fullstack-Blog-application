import React, {Component} from "react";
import { createRoot } from 'react-dom/client';
import BlogImage from '../../static/images/BlogImage.jpg';
import '../../static/css/index.css';
import Button from 'react-bootstrap/esm/Button';


export default function Home() {
    return (
        <div className="container text-center">
            <div className="row align-items-center">
                <h1 className="my-3">Blog App</h1>
                <figure className="figure align-items-center my-3">
                    <img src={BlogImage} alt="A laptop with Blog on screen" className="img-fluid border rounded-3 shadow-lg mb-5" 
                    width="700" height="500" loading="lazy"/>
                    <figcaption className="figure-caption"><a href="https://www.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_18665193.htm#query=blog&position=4&from_view=keyword&track=sph&uuid=b27718e6-9aa9-4d54-a902-51b655a2237c">
                    Image by rawpixel.com</a> on Freepik</figcaption>
                </figure>
            </div>
            <div className="row align-items-center py-3">
                <div className="col">
                <Button type="button" href="/read" className="btn btn-primary">Read blog</Button>

                </div>
                <div className="col">
                <Button type="button" href="/write" className="btn btn-primary">Write blog</Button>

                </div>
            </div>
        </div>

    );
}