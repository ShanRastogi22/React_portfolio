import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/shantanu-rastogi-837668258/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ShanRastogi22" target="_blank"><BsGithub /></a>
        <a href="https://www.facebook.com/shan.rastogi.3" target="_blank"><BsFacebook /></a>
      
    </div>
  );
}

export default HeaderSocial;
