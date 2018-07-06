import { injectGlobal } from 'styled-components';

injectGlobal`
   @import url('https://fonts.googleapis.com/css?family=Slabo+27px|Source+Sans+Pro:300');
  *,*::before,*::after{
      margin:0;
      padding:0;
  }
  html,body{
      height:100%:
  }
  h1,h2,h3,h4,h5{
 font-family: 'Source Sans Pro', sans-serif;
    color:white;
  }
  h1{
      line-height:6rem;
      font-size:3rem;
  }
  h2{
      font-size:2.5rem;
  }
  h3{
      font-size:2.2rem;
  }
  h4{
      font-size:2rem;
  }
  h5{
        
      font-size:1.8rem;
  }
  hr{
      margin:0.5rem 0;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size:62.5%;
    color:white;
    background:#D0D1AC;
  }
  #root{
    position:relative;
  }
  p { 
    font-size:1.4rem;
    font-weight:300;
    line-height:2rem;
    color:white;
  }
`;