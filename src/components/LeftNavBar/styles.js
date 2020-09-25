import styled from 'styled-components'

export const LeftNavigation = styled.div`
  .left-nav-bar{
    display: none ;
  }

  @media(min-width: 780px){
    display:flex;
    margin:0 40px;

    .left-nav-bar{
      display: flex; 
      flex-direction: column;
      align-items: center;
    }
    .left-nav-bar p{
      color: var(--color-primary);
      font-size: 12px;
      text-align: center;
      padding-bottom: 10px;
    }

    .left-nav-bar #video{
      position:initial;
      display:flex;
      width: 82px;
      height: 45px;
      padding-bottom: 10px;
      opacity: 0.5;
    }

    #video-play{
      position: absolute;
      display: flex;
      padding: 0 22px;
      top: 190px;
      cursor: pointer;
    }

    .scroling-content img{
      position:initial;
      width: 82px;
      height: 93px;
      padding-bottom: 6px;
      margin: 0px;
      display: flex;
      align-items: center;
      opacity: 0.7;
    }

    .scroling-content img:last-child{
      padding-bottom: 20px;
    }

    .scroling-content img:first-child{
      padding-top: 20px;
      opacity: initial;
    }

    #arrowUp,
    #arrowDown{
      display: flex;
      justify-self: center;
    }
  }
`