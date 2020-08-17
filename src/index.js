import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './components/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import theme from './components/Themes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
