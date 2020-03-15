import React, { useState } from 'react'
import styled from 'styled-components';
import { Formik } from 'formik';
import axios from 'axios';

const StyledWrapper = styled.div`
width : 100%; 
min-height: 100vh; 
background-color: #1EBDE0;
position: relative;
padding-top:200px ; 
padding-bottom: 100px;

form{ 
    display : flex; 
    justify-content: center; 
    align-items: center;
    flex-direction:column;
}

`

const StyledTittle = styled.h2`
color : white; 
font-size: 1.5em; 
position: absolute;
top: 10%; 
left : 50%; 
transform: translate(-50%, -50%); 
width: 80%;
text-align: center;
`

const StyledInput = styled.input`
display: block ; 
width : 70% ;
max-width: 400px;
min-width: 200px;
height: 30px; 
background: none; 
border : 2px solid black; 
font-family:Ubuntu ;
margin-bottom: 20px;
border-radius:10px;
background-color: white;
 


`

const StyledLabel = styled.label`
display: block; 
font-size: .8em; 
font-weight: bold; 
font-family: Ubuntu; 
color : white;
margin-bottom: 5px;


`

const StyledButton = styled.button`
width: 200px; 
margin-top: 30px;
height: 40px; 
color : white; 
font-weight: bold; 
font-family: ubuntu;
text-align: center;
border: none;
background-color: rgba(0,0,0,.5); 
padding: 5px 5px;
border-radius: 20px;
line-height: 25px;
box-shadow: 0 0 5px 2px white;
transition: .2s linear; 
will-change: box-shadow;
:hover{ 
    box-shadow: 0 0 5px 5px greenyellow; 
}
`

const StyledFacebook = styled.a`
display: block;
color: white; 
font-weight: bold; 
font-size: .9em; 
width : 60%; 
max-width : 400px;
border-radius:10px;
transition: .2s linear;
position: relative;
text-align: center;
left: 50%; 
transform: translate(-50%, 50%);
padding : 10px;
text-decoration: none;
text-shadow: 2px 2px black;
overflow : hidden;



:after{ 
  width : 100%; 
  height: 100%; 
  background-color : royalblue; 
  content: '';
  display: block;
  position: absolute; 
  top: 0; 
  left : -100%; 
  z-index: -1;
  transition: all .2s linear;




}

:hover ::after { 
  cursor: pointer; 
  transform: translateX(100%);
}

`

const ModalSubmited = styled.div`
width : 80vw; 
height: 60vh;
max-width : 600px; 
max-height: 400px; 
position : fixed; 
top: 50%; 
left : 50%; 
transform: translate(-50%,-50%); 
background-color: rgba(0,0,0,.9);
display : flex; 
justify-content : center; 
align-items: center; 
flex-direction : column; 
z-index : 20; 
box-shadow : 0 0 20px 5px white;

h2{
  /* color :#1EBDE0; */
  color :white;
  font-size : 1em;
  text-align : center; 
}

p { 
  color : white;
  font-size : .8em;
  text-align : center; 
}

button { 
  background : #1EBDE0; 
  border:none; 
  color : white; 
  font-size : .9em; 
  width : 120px; 
  height : 50px; 
  border-radius:10px; 
  transition : .2s linear; 
 :hover { 
   cursor: pointer; 
   transform : scale(1.1); 
 } 
}
`

const Contact = () => {
  const [isSubmitted, setState] = useState(false)

  return (
    <StyledWrapper>
      {isSubmitted ? <ModalSubmited>
        <h2>Wiadomość została wysłana</h2>
        <p>Postaramy się sprawnie udzielić odpowiedzi!</p>
        <button onClick={() => (setState(false))}>Zamknij</button>
      </ModalSubmited> : null}
      <StyledTittle>Zapraszamy do Kontaktu! </StyledTittle>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}

        onSubmit={(values, { setSubmitting }) => {
          axios.post("https://us-central1-ksmakcars.cloudfunctions.net/sendEmail", values).then((res) => {
            setSubmitting(false)
            setState(true)
          }).catch((err) => {
            if (err) { alert("Coś poszło nie tak, spóbuj jeszcze raz ") }
          })
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,

          /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit}>
              <StyledLabel htmlFor="name">Imię</StyledLabel>
              <StyledInput onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                type="text"
                name="name"
                id="name" />
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledInput onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="e-mail"
                name="email"
                id="email" />
              <StyledLabel htmlFor="message">Wiadomość</StyledLabel>
              <StyledInput onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                as="textarea"
                type="text"
                style={{ height: '150px', width: '80%', maxWidth: '500px' }}
                name="message"
                id="message" />
              <StyledButton type="submit" disabled={isSubmitting}>Wyślij</StyledButton>
            </form>
          )}
      </Formik>


      <StyledFacebook href="https://www.facebook.com/usasamochody/" target="_blank">Odwiedź nasz Facebook!</StyledFacebook>

    </StyledWrapper>

  )
}

export default Contact