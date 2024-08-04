import React, { Component } from 'react';
import image from './OIP.jpg'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl ,author,date,source} = this.props;
        let d= new Date(date)
        let res=d.toGMTString();


        return (
            <div className='container my-3'>
                <div className="card">
                <span className="badge position-absolute top-0   translate-middle rounded-pill  bg-danger" style={{left:'50%',zIndex:'1'}}> 
                {source}
            </span>
                    <img 
                        src={imageurl!=null?imageurl:image} 
                        className="card-img-top" 
                        alt="news" 
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text" style={{color:"red"}}><small className="text-muted">By {author} on {res}</small></p>
                        <a rel='noreferrer' href={newsurl} className="btn btn-sm btn-dark">READ MORE</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;

