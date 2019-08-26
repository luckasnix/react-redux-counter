import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import CounterPage from './pages/CounterPage'

function App() {
    return (
        <Provider store={store}>
            <CounterPage/>
        </Provider>
    )
}

export default App