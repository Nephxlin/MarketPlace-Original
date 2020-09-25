import React from 'react'

import {ArrowBoxContent} from'./styles'

import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'


const ArrowBox = () => {
  return (
    <ArrowBoxContent>
      <img src={arrowLeft} alt="" id="arrow" />
      <p id="arrow-box-desktop">1 de 3</p>
      <p id="arrow-box-mobile">1 de 10</p>
      <img src={arrowRight} alt="" id="arrow" />
    </ArrowBoxContent>
  )
}

export default ArrowBox