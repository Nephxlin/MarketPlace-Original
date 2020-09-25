import React from 'react';

import {LeftNavigation} from './styles'

import arrowUp from '../../assets/icons/arrow-up.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import playVideo from '../../assets/icons/play-video.svg'


const LeftNavBar = props => {

  const { SelectedProduct } = props

  return (
      <LeftNavigation>
       
        <div className="left-nav-bar">
          <div>
            <p>Vídeo</p>
            <img id='video' src={SelectedProduct} alt="sandals" />
            <img id='video-play' src={playVideo} alt="Play" />
          </div>

          <img id='arrowUp' src={arrowUp} alt="Arrow Up" />

          <div className="scroling-content">
            <img src={SelectedProduct} alt="sandals" />
            <img src={SelectedProduct} alt="sandals" />
            <img src={SelectedProduct} alt="sandals" />
            <img src={SelectedProduct} alt="sandals" />
          </div>

          <img id='arrowDown' src={arrowDown} alt="" />
        </div>
{/* 
        <div className="product-photo">

          <h1>Rasteira tira dedo</h1>
          <span>RT 0568 | 03.07.0653</span>

          <img src={SelectedProduct} alt="sandals" />
        </div> */}
      </LeftNavigation>
  )
}

export default LeftNavBar