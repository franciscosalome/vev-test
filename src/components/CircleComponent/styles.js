import styled from "styled-components";


export const Circle = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #FF705A;
  cursor: grab;
  z-index: 998;
  &:hover{
    z-index: 999 !important;
  }
`
export const InputContainer = styled.span`
  font-family: Arial, Helvetica, sans-serif;

`

export const Input = styled.input`
  border:none;
  border-bottom: thin solid black;
  background-color: rgba(0,0,0,0);
  width: 60px;
  height: 19px;
  padding: 1px 2px;
  margin: 8px;
  text-align: center;
  &:focus{
    outline: none;
  }
`