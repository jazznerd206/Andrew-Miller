import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
`

export const Form = styled.div`
  margin: 0 auto;
  height: 100%;
  max-height: 75vh;
  max-width: 75vw;
  width: 100%;
  display: flex;
  flex-flow: row;
  flex: 1 1 auto;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`

export const Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  justify-content: space-evenly;
  align-items: center;
`

export const FormTitle = styled.h1`
  font-size: 2em;
`

export const FormSubTitle = styled.h3`
`

export const FormLabel = styled.label`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  margin: .25em auto;
  color: black;
  transition: all .25s ease-in-out;
`

export const Submit = styled.button`
  margin: 1em 2em;
  font-size: 1em;
  border-radius: 10px;
`

export const Input = styled.input.attrs(props => ({
    type: "text",
  }))`
    background: black;
    color: white;
    border: .5px solid white;
    position: relative;
    margin: 1em 2em;
    font-size: 1em;
    border-radius: 10px;
    margin: 0 auto;
    padding: .25em .5em;
    &:focus {
      outline: none;
      background: rgba(255,255,255,.25);
      border: none;
      &::placeholder {
        color: transparent;
      }
    }
    ::placeholder {
    color: rgb(100,100,100);
    font: 400 14px 'Source Sans Pro', 'sans-serif';
  }
`

export const Message = styled.textarea`
  padding: 1em;
  background: black;
  color: white;
  border: .5px solid white;
  &:focus {
      outline: none;
      background: rgba(255,255,255,.25);
      border: none;
      &::placeholder {
        color: transparent;
      }
    }
  @media (max-width: 768px) {
    max-width: 90vh;
    margin: 0 auto;
    }
`