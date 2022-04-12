import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import { RobinhoodProvider } from '../context/RobinhoodContext';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl="https://tortdzkfheda.usemoralis.com:2053/server"
      appId="HvjaZwsGwJSpzv1YDzBL9q8Pq2ba4DROiz8SVyK3"
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
