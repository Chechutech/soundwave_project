import React from 'react';
import Covers from '../images/covers.jpg';
import Albums from '../images/albums.svg';
import Microphone from '../images/microphone.svg';
import More from '../images/more.svg';

function SectionDiscover() {
    return (
      <div className="Discover" id="discoverpage">
        <img src= {Covers} />
        <h1>Discover new music</h1>
        <div><img src= {Microphone} /> <p>Charts</p></div>
        <div><img src= {Albums} /> <p>Albums</p></div>
        <div> <img src= {More} /><p>More</p></div>
       <p>By join you can benefit by listening the latest albums realesed</p> 
     
    </div>
    );
  }
  
  export default SectionDiscover;