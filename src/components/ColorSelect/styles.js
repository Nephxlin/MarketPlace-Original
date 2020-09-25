import styled from 'styled-components'

export const ColorPicker = styled.div`
  grid-area: color-details;


  span,p{
    font-size: 14px;
    line-height: 26px;
    display: flex;
    align-items: center;
    font-weight: normal;
  }

  span{
    color: var(--color-select-title);
    padding-left: 8px;
  }

  p{
    padding-bottom: 8px;
    color: var(--color-text);
  }

  img{
    margin-right: 10px;
    cursor: pointer;
  }

 img#Enable{
    border: 2px solid var(--color-primary);
    border-radius: 50%;
  }
  
  @media(min-width:780px){
    margin: 0 20px;
    span{
      padding-left: 8px;
    }
  }
`