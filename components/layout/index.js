import Head from 'next/head'
import PropTypes from 'prop-types'
import Link from 'next/link'
// theme
import Theme from '../../theme'
import { Nav, LinkInNav } from './ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export default class Layout extends React.PureComponent {
  render() {
    const { title, description, children, showBack } = this.props

    return <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/static/manifest.webmanifest" />
        <meta name="theme-color" content="#ff6600" />
        <link rel="shortcut icon" href="/static/icon.png" />
        <link rel="apple-touch-icon" href="/static/icon.png" />
        <meta name="apple-mobile-web-app-title" content="Hacker News" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      <Nav bg={Theme.colors.orange} color={Theme.colors.white} width='100%' height='50px' >
        <Link href="/">
          <LinkInNav display='inline-block' color={Theme.colors.white}>
            {showBack && <span className="back">&lt;</span>}
            <span className="title">Теплопрофф</span>
          </LinkInNav>
        </Link>
      </Nav>
      {children}
    </div>
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
