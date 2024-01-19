import styled from 'styled-components';

export const Wrapper = styled.div`

display:flex;
justify-content:space-between;
margin:auto;
flex-direction:column;
border-radius:20px;

button{
    border-radius:0 0 20px 20px;  
}
 
img{
   margin:auto;
    max-height:250px;
    max-width:200px;
    object-fit:cover;
    border-radius:20px 20px 0 0;
}

div{
    font-family:Arial,Helvetica,sans-serif;
    padding:1rem;
    height:100%;
}

.one-line-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .two-line-desc {
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .checked {
    color: orange;
  }
  .card{
    position:relative;
    transition:1s;
  }
  .card:hover{
    top: -2px;
    background: rgba(0, 0, 0, 0.09);
`;
