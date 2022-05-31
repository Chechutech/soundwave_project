import React from 'react';
import Covers from '../images/covers.jpg';
import Albums from '../images/albums.svg';
import Microphone from '../images/microphone.svg';
import More from '../images/more.svg';
import './SectionDiscover.css';

function SectionDiscover() {
    return (
      <div className="Discover" id="discoverpage">
        <div className="Containertexto">
         <h1>Discover new music</h1>
            <div className="iconos">
              <div className="Mic"><img src= {Microphone} /> <p>Charts</p></div>
              <div className="Albumns"><img src= {Albums} /> <p>Albums</p></div>
              <div className="More"> <img src= {More} /><p>More</p></div>
            </div>
          <p>By join you can benefit by listening the latest albums released.</p> 
      </div>
       
      <img className="coverimg" src= {Covers} />
     
    </div>
    );
  }
  
  export default SectionDiscover;