import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://www.github.com/mfoyedele'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a href='https://www.twitter.com/realfunso'>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/musa-funso-oyedele-14b262195'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://www.facbook.com/realfunso'>
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
