import styled from 'styled-components'

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12.8rem auto 3.4rem auto;
`

export const Description = styled.div`
  margin-bottom: 2rem;
`

export const Markdown = styled.section`
  width: 800px;
  max-width: 90%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-bottom: 1rem;
    list-style-position: inside;
  }
`

export const FooterText = styled.p`
  margin-top: 2rem;
`

export const Heart = styled.span`
  color:#e25555;
`

export const NameLink = styled.a`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    font-size: 1.4rem;
    font-weight: 700;
    appearance: none;
    color: ${({ theme }) => theme.text};
  }
`
