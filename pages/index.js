import 'isomorphic-fetch';
import Layout from '../components/layout';
import StoryList from '../components/StoryList';
import Error from 'next/error';
import Link from 'next/link';
import Banner from '../components/banner';
///////////////////////////////////////////////////////////////////////////////////////////////////

export default class extends React.Component {
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {
    return (
      <Layout title={'Hacker News Reader'}  description={'A sample PWA built with React and Next.JS'}>
        {/* <StoryList stories={stories} /> */}
        <Banner />
{/* 
        <footer>
          <Link href={`/?page=${page+1}`} prefetch><a>Next Page &gt;</a></Link>
        </footer> */}

        <style jsx>{`
          footer {
            padding: 2em 1em;
          }
          footer a {
            font-size: 1.5em;
            font-weight: bold;
            color: #ff6600;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }

}