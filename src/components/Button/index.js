import React from  'react'

import {ButtonComponent} from './styles'

const Button = (props) => {
  const {clickFunction,Title} = props
  
  return (
    <ButtonComponent onClick={clickFunction}>{Title}</ButtonComponent>
  )
}

export default Button