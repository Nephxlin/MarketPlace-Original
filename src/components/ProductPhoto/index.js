import React from 'react'

import {ProductShow} from './styles'

const ProductPhoto = props => {

  const {SelectedProduct} = props

  return (
      <ProductShow>
        {/* Mobile */}
        <h1>Rasteira tira dedo</h1>
        <span>RT 0568 | 03.07.0653</span>
        {/* Mobile */}
        <img src={SelectedProduct} alt="sandals" />
      </ProductShow>
  )
}

export default ProductPhoto