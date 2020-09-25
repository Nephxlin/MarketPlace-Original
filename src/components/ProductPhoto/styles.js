import styled from 'styled-components'

export const ProductShow = styled.div`
  display: initial;
  justify-self: center;
  margin: 0px 35px;
  
  h1{
    color: var(--color-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 163.42%;

    display: flex;
    justify-content: center;
    text-transform: uppercase;
    
    padding-top: 15px;
  }

  span{
    color: var(--color-gray-dark);

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;

    display: flex;
    justify-content: center;
    margin-bottom: 9px;
  }
  
  img{
    max-width: 100%;
    min-height: 329px;
    margin-bottom: 6px;
  }


  @media(min-width:780px){
    display: flex;
    width: inherit;
    justify-self: center;

    h1,span{
      display:none;
    }

    img{
      position: initial;
      height: 556px;
      width: 430px;
      margin: 0px;
      align-self: center;
    }
  }

`