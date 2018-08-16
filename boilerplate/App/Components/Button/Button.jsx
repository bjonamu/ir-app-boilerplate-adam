import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: #EC1D97;
  color: #FFF;
  font-size: 16px;
  padding: 0.25em 1em;
  margin: 0.5em 0;
  border: none;
  border-radius: 4px;
  width: 200px;
  height: 40px;
  cursor: pointer;
  outline: none;
  font-family: sans-serif;

  &:disabled {
    background: #DDDDDD;
  }
`

export default Button
