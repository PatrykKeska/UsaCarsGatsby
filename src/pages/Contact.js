import React from 'react'
import styled from 'styled-components';
import {Formik} from 'formik'; 
import axios from 'axios';
const StyledWrapper = styled.div`
width : 100%; 
min-height: 120vh; 
background-color: #1EBDE0;
position: relative;
padding-top:200px ; 

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
width : 80% ;
max-width: 500px;
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
/* position: absolute;  */
/* bottom: 2%;  */
transition: .2s linear; 
will-change: box-shadow;
:hover{ 
    box-shadow: 0 0 5px 5px greenyellow; 
}
`

const Contact = () => (
    <StyledWrapper>
        <StyledTittle>Zapraszamy do Kontaktu! </StyledTittle>
        <Formik
      initialValues={{ name :'', email: '', message: '' }}

      onSubmit={(values, { setSubmitting }) => {
        axios.post("https://us-central1-ksmakcars.cloudfunctions.net/sendEmail", values).then((res)=>{ 
            setSubmitting(false)
            console.log(res)
        }).catch((err)=>{ 
            console.log(err)
            setSubmitting(false)
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
              style={{height: '150px', width: '80%', maxWidth:'500px'}}
            name="message"
            id="message" />
      <StyledButton type="submit" disabled={isSubmitting}>Wyślij</StyledButton>
      </form>
      )}
    </Formik>

    </StyledWrapper>

)

export default Contact