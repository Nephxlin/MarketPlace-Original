import styled from 'styled-components'

export const ArrowBoxContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  align-items: center;

  p{
    color: var(--color-arrow-border);
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 15px;
  }

  #arrow{
    width: 10px;
    border: 2px solid var(--color-arrow-border);
    padding: 8px;
    border-radius: 100%;
    cursor:pointer;
  }
  
  #arrow-box-desktop{
    display: none;
  }

  @media(min-width:780px){

    #arrow-box-desktop{
      display: initial;
    }

    #arrow-box-mobile{
      display: none;
    }


    p{
      font-size: 14px;
      line-height: 23px;
      padding: 0 15px;
    }
}
`
