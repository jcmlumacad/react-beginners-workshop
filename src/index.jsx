import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowerRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const render = AppComponent =>
  ReactDOM.render( // eslint-disable-line react/no-render-return-value
    <BrowerRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowerRouter>,
    document.querySelector('#root'),
  )

render(App)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default // eslint-disable-line global-require
    render(NextApp)
  })
}
