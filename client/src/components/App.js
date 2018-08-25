import React, { Component } from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import { Authentication, AuthRoute } from './Authentication'

import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurauntApp from './restauraunt/RestaurauntApp'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
		  	<Router>
		  		<Route exactpath="/" component={LandingPage} />
		    	<Route path="/deliveryLogin" component={DeliveryApp} />
		    	<Route path="/restaurauntLogin" component={RestaurauntApp} />
		  	</Router>
		  </Provider>
    )
  }
}

export default App
