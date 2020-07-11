import 'isomorphic-fetch';
import Layout from '../components/layout';
import StoryList from '../components/StoryList';
import Error from 'next/error';
import Link from 'next/link';
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
      <Layout title={'ТеплоПрофф'}  description={'Тепло прямо вам в дом'}>
        {/* <StoryList stories={stories} /> */}
{/* 
        <footer>
          <Link href={`/?page=${page+1}`} prefetch><a>Next Page &gt;</a></Link>
        </footer> */}
      </Layout>
    );
  }

}