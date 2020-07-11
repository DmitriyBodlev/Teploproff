import Head from 'next/head'
import PropTypes from 'prop-types'
import Link from 'next/link'
// theme
import Theme from '../../theme'
import { Nav, LinkInNav } from './ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export default class Header extends React.PureComponent {
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
        <meta name="apple-mobile-web-app-title" content="ТеплоПрофф" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Nav bg={Theme.colors.darkGray} color={Theme.colors.white} width='100%' height='45px' >
        <Link href="/">
          <LinkInNav display='inline-block' color={Theme.colors.white}>
            {showBack && <span className="back">&lt;</span>}
            <span className="title"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
            <div className='smm-link'>
              <a href='static/facebook.png'></a>
              <i>linkedin</i>
              <i>linkedin</i>
              <i>linkedin</i>
              <i>linkedin</i>
            </div>
          </LinkInNav>
        </Link>
      </Nav>
      {children}
      <i class="fa fa-linkedin" aria-hidden="true"></i>
      <p>sdfdsfsdf</p>
      <style jsx>
          {`
            Header {
                outline: none;
                margin: 0;
                padding: 0;
            }

            LinkInNav {
              display: flex;
              align-items: center;
            }

            .smm-link {
              margin: 0 100px;
              width: 600px;
              height: 40px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            a {
              width: 35px;
              height: 18px;
              background-color: white;
            }
          `}
      </style>
    </div>
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
