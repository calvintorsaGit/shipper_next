import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {store, persistor} from '../store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Component {...pageProps} />
        </PersistGate>
    </Provider>
}

export default MyApp
