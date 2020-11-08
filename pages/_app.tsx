import { AppProps } from 'next/app'
import '../styles/mainlayout.css'
import '../styles/game.css'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App