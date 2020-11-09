import { AppProps } from 'next/app'
import '../styles/mainlayout.css'
import '../styles/game.css'
import '../styles/gikal.css'
import '../styles/massdata.css'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App