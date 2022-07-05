import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__socials'>
    <div>
      <a href='https://github.com/mfoyedele'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a href='https://twitter.com/realfunso'>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://linkedin.com/in/musa-funso-oyedele-14b262195'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='http://facbook.com/realfunso'>
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
