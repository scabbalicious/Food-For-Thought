import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import {connect} from 'react-redux'
import { getDonations } from '../../actions/donateActions'
import {Container, Button, Header} from 'semantic-ui-react'

class D_Home extends Component {
  state = {
      id:api.getProfile().id
   }

   componentDidMount() {
    getDonations()
   }

  render() {
    return (
      <div>
        <div className="pickupnotification">
          <Header as='h3'>Pickups available for today: {this.props.donate.length}</Header>
        </div>
     		
        <Container className="D_HomeContainer">
     			<div>
     				<Link to="/delivery/map">
              <Button color='green' type="submit" className="startPickup wubba">My Pickups Map</Button>
              </Link>
     			</div>
     			<div>
     				<Link to={`/delivery/reports/${this.state.id}`}>
              <Button color='red' type="submit" className="manageReports wubba">Manage Reports</Button>
            </Link>
     			</div>
     			<div>
     				<Link to="/delivery/pickups">
              <Button color='blue' type="submit" className="navHome wubba">View All Available Pickups</Button>
            </Link>
     			</div>
     		</Container>
     	</div>
   )
 }
}

function mapStateToProps(appState) {
  console.log('appstate', appState)
  return {
    donate: appState.appReducer.donate
  }
}
export default withAuth(connect(mapStateToProps)(D_Home))