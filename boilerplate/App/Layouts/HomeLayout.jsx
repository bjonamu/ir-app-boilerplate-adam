import React from 'react'
import ReactMarkdown from 'react-markdown'

import { PageWrapper, Markdown, Description, FooterText, Heart, NameLink } from './Styles'
import { HeadingPrimary } from '../Styles/Typography'
import README from '../README.md'

class HomeLayout extends React.Component {
  state = {
    readMe: null
  }

  componentDidMount() {
    fetch(README)
      .then(res => res.text())
      .then(readMe => {
        this.setState({ readMe })
      })
  }

  render() {
    return (
      <PageWrapper>
        <HeadingPrimary>{`{ignite-react-app}`}</HeadingPrimary>
        <Description>
          <pre>/**</pre>
          <pre>* A CLI extension of the famous create-react-app with</pre>
          <pre>* best practice web app structure adopted from the</pre>
          <pre>* famous react native ignite cli</pre>
          <pre>*/</pre>
        </Description>
        <Markdown>
          <ReactMarkdown source={this.state.readMe} />
        </Markdown>
        <FooterText>Made with <Heart>❤</Heart> by <NameLink href="https://linkedin.com/in/blessing-jonamu-3848a751/">Blessing Jonamu</NameLink> - Copyright {new Date().getFullYear()}</FooterText>
      </PageWrapper>
    );
  }
}

export default HomeLayout
