

import React from 'react';
import './about.css';
import boyPic from '../Assest/boyPic.svg'

const About = () => {
  return (
    
    <div className="about">
      <h1 className="about-heading">ABOUT</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={boyPic} alt="" />
        </div>
        <div className="about-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non libero ac nunc posuere viverra. Sed id urna id est efficitur commodo. Nunc volutpat condimentum nibh, ac ultrices sapien egestas sit amet. Vivamus eu nisl non libero tincidunt consectetur. Phasellus non eros sed lorem tristique sodales. Sed vitae lectus nec nulla pharetra commodo nec in nunc.
          </p>
          <p>
            Nullam non libero ac nunc posuere viverra. Sed id urna id est efficitur commodo. Nunc volutpat condimentum nibh, ac ultrices sapien egestas sit amet. Vivamus eu nisl non libero tincidunt consectetur. Phasellus non eros sed lorem tristique sodales. Sed vitae lectus nec nulla pharetra commodo nec in nunc.
          </p>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
