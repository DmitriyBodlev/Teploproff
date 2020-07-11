import Head from 'next/head'
import PropTypes from 'prop-types'
import Link from 'next/link'
// Header
import Header from './header'
// theme
import Theme from '../../theme'
import { Nav, LinkInNav } from './ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export default class Layout extends React.PureComponent {
  render() {
    const { title, description, children, showBack } = this.props

    return <div>
      <Header></Header>
      {children}
      <style jsx>
          {`
            Layout {
                outline: none;
                margin: 0;
                padding: 0;
            }
          `}
      </style>
    </div>
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
