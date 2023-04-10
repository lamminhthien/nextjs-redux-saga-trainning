import {store} from '@/states/store';
import type {AppProps} from 'next/app';
import Link from 'next/link';
import {Provider} from 'react-redux';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Link href={'/contact'}>Contact</Link>
      <Link href={'/'}>Home</Link>
      <Component {...pageProps} />
    </Provider>
  );
}
