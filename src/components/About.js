import React, { Component } from 'react'
import virat from './img45.jpg'

export class About extends Component {
    constructor(){
        super();
        document.body.style.backgroundColor="black";
        document.body.style.Color="white";
        
    }
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center",color:"white"}}>ABOUT US </h1>
        <h4 style={{textAlign:"center",color:"violet"}} >AKSHAY KIREET - THE DEVELOPER </h4>
        <div className="img" style={{paddingLeft:"600px"}}>
        <img src={virat} alt="" style={{height:"250px",width:"250px",border:"2px solid violet",padding:"2px "}} />
        </div>
        <div className="text" style={{backgroundColor:"#f2#f2#f2",margin:"30px",border:"#f2#f2#f2 solid black",color:"white"}}>
            <h6><b>ABOUT</b></h6>
        Welcome to AK NEWS  <br/>
At AK NEWS, our mission is to keep you informed and engaged with the world around you. 
<br/>We believe that access to reliable, up-to-date news is essential for everyone, and we are committed to delivering the most accurate and comprehensive news coverage available.
<h6><b>What We Offer</b></h6>
<ul>
    <li>Comprehensive Coverage: From local headlines to international affairs, our team curates news from trusted sources worldwide to ensure you get a balanced view of the events shaping our world.
</li>
<li>
Personalized News Feed: Our app learns your preferences and interests over time, providing a tailored news feed that keeps you informed on topics you care about most.
</li>
<li>
Real-Time Updates: Stay ahead with real-time news alerts and notifications. Never miss an important story as it happens.
</li>
<li>
Multimedia Content: Enjoy a rich variety of content including articles, videos, podcasts, and interactive features designed to give you a deeper understanding of the news.
</li>
</ul>
<h6><b>Our Commitment</b></h6>
<p>
We are dedicated to journalistic integrity, transparency, and the pursuit of truth. Our team adheres to the highest standards of reporting and fact-checking, ensuring that the news you receive is accurate and unbiased. We are committed to creating a safe and respectful community where diverse perspectives are welcomed and valued.

Join Us</p>
        </div>
      </div>
    )
  }
}

export default About
