import React from 'react'
import Header from '../../Components/Header/header';
import uploadThumb from '../../Assets/Images/Upload-video-preview.jpg';
import './uploadpage.scss';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default function UploadPage() {

  return (
    <div className='upload'>
      <div className='upload__header'>
        <Header />
      </div>
      <div className='upload__body'>
      <h1 className='upload__title'>Upload Video</h1>
      <form className='upload__form'>
        <label htmlFor='uploadImage' className='upload__form-image--text'>VIDEO THUMBNAIL</label>
        <img src={uploadThumb} alt='thumbnail placeholder' className='upload__form-image'/>
        <label htmlFor='uploadTitle' className='upload__form-title'>TITLE YOUR VIDEO</label>
        <input type='text' id='uploadTitle' name='uploadTitle' placeholder='Add a title to your video' className='upload__form-title--box' required/>
        <label htmlFor='uploadDesc' className='upload__form-description'>ADD A VIDEO DESCRIPTION</label>
        <textarea id='uploadDesc' name='uploadDesc' placeholder='Add a description to your video' className='upload__form-description--box'/>
        <Link to='/' className='upload__form-button'>PUBLISH</Link>
        <Link to='/' className='upload__form-button--cancel'>CANCEL</Link>
      </form>
      </div>
    </div>
  )
}