import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.snow};
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
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
`

export default Button
