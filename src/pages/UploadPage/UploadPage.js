import React, { Component } from 'react'
import uploadThumb from '../../Assets/Images/Upload-video-preview.jpg';
import './UploadPage.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { videos } from '../../Data/videoURL'

export default class UploadPage extends Component {

  state = {
    uploadTitle: '',
    uploadDesc: '',
    wasClicked: false
  }

  submitHandler = (ev) => {
    ev.preventDefault()

    axios.post(videos, {
      title: this.state.uploadTitle,
      description: this.state.uploadDesc
    })
      .then(res => console.log(res))
      this.setState({
        wasClicked: true
      })
  }

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    if(this.state.wasClicked === true){
      return(
        <div className='upload__modal'>
          <h1 className='upload__modal-title'>Video was published!!!</h1>
          <Link to='/' className='upload__modal-button--home'>Home</Link>
          <Link to='/upload' className='upload__modal-button--back'>Go Back</Link>
        </div>
      )
    }

    return (
      
      <div className='upload'>
        <div className='upload__body'>
          <h1 className='upload__title'>Upload Video</h1>
          <form onSubmit={this.submitHandler} className='upload__form'>
            <div className='upload__form-container'>
              <div className='upload__form-container--thumbnail'>
                <label htmlFor='uploadImage' className='upload__form-image--text'>VIDEO THUMBNAIL</label>
                <img src={uploadThumb} alt='thumbnail placeholder' className='upload__form-image' />
              </div>
              <div className='upload__form-container--info'>
                <label htmlFor='uploadTitle' className='upload__form-title'>TITLE YOUR VIDEO</label>
                <input onChange={this.formHandler} type='text' id='uploadTitle' name='uploadTitle' placeholder='Add a title to your video' className='upload__form-title--box' required />
                <label htmlFor='uploadDesc' className='upload__form-description'>ADD A VIDEO DESCRIPTION</label>
                <textarea onChange={this.formHandler} id='uploadDesc' name='uploadDesc' placeholder='Add a description to your video' className='upload__form-description--box' required />
              </div>
            </div>
            <div className='upload__form-buttons'>
              <button type='submit' className='upload__form-button'>PUBLISH</button>
              <Link to='/' className='upload__form-button--cancel'>CANCEL</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
