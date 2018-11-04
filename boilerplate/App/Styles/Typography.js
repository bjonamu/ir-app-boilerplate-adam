import styled, { css } from 'styled-components'

const BaseStyle = css`
  display: block;
  backface-visibility: hidden;
  color: ${({ theme }) => theme.text};
`

export const HeadingPrimary = styled.h1`
  ${BaseStyle}
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
`

export const HeadingSecondary = styled.h2`
  ${BaseStyle}
  font-size: 2.4rem;
  font-weight: 500;
  margin-top: 2rem;
`

export const HeadingTertiary = styled.h3`
  ${BaseStyle}
  font-weight: 500;
  font-size: 2rem;
  margin-top: 1.5rem;
`

export const SubtitlePrimary = styled.h4`
  ${BaseStyle}
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

export const SubtitleSecondary = styled.h5`
  ${BaseStyle}
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 1.6rem;
`

export const SubtitleTertiary = styled.h6`
  ${BaseStyle}
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
`

export const Text = styled.p`
  ${BaseStyle}
  font-weight: 400;
  font-size: 1.4rem;
  margin-bottom: .8rem;
`
