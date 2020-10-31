import React from 'react';
import Particle from 'react-particles-js';
import './Particles.css';

function Particles ()
{
    return (
        <Particle className="particles"
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            },
            "color": {
                "value": "#f28111"
              }, 
            "size":{
                "value": 8
            }
          }, 
          
        }} 
      />
    );

}
export default Particles;