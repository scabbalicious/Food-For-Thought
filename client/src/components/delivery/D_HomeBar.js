import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth, api } from '../Authentication'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import heart from '../../assets/heart.png'

class D_HomeBar extends Component {
  state = {
    size: 'massive'
  }
componentWillMount() {
    window.addEventListener('resize', this.handleMobile)
}
componentWillUnmount() {
  window.removeEventListener('resize', this.handleMobile)
}
handleMobile = () => {
  this.setState({
    size: 'tiny'
  })
}

  handleClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }
  
  logout = (e) => {
    this.props.signout()
  }

  render() {
    const { activeItem } = this.state
    const trigger = (
      <div>
        <span className='navUsername'>
          Welcome, {api.getProfile().name}!
        </span>
        <Icon name='user' size='large'/>
      </div>
    )
    const burger = (
      <div>
        <Icon name='bars' size='large' />
      </div>
      )

    return (
      <Menu size={this.state.size} inverted>
        <Menu.Item id='notmobile' >
          <img src={heart} alt="Food For Thought"/>
        </Menu.Item>
        <Dropdown trigger={burger} pointing='top left' id='mobileonly' item>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/delivery' name='Home' active={activeItem === 'Home'} onClick={this.handleClick} content='Home' icon='home'/>
                <Dropdown.Item as={Link} to={`/delivery/map/${api.getProfile().id}`} name='Map' active={activeItem === 'Map'} onClick={this.handleClick} content='Map' icon='map'/>
                <Dropdown.Item as={Link} to='/delivery/pickups' icon='list' name='Pickups' active={activeItem === 'Pickups'} onClick={this.handleClick} content='All Available Pickups' />
                <Dropdown.Item as={Link} to={`/delivery/reports/${api.getProfile().id}`} icon='chart bar' name='Reports' active={activeItem === 'Reports'} onClick={this.handleClick} content='Manage Reports' />
            </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as={Link} to='/delivery' name='Home' id='notmobile' active={activeItem === 'Home'} onClick={this.handleClick} />
        <Menu.Item as={Link} to={`/delivery/map/${api.getProfile().id}`} name='Map' id='notmobile' active={activeItem === 'Map'} onClick={this.handleClick} />
        <Menu.Item as={Link} to='/delivery/pickups' name='Pickups' id='notmobile' active={activeItem === 'Pickups'} onClick={this.handleClick} />
        <Menu.Item as={Link} to={`/delivery/reports/${api.getProfile().id}`} name='Reports' id='notmobile' active={activeItem === 'Reports'} onClick={this.handleClick} />
        <Menu.Menu position='right' >
          <Dropdown trigger={trigger} pointing='top right' item>
            <Dropdown.Menu >
              <Dropdown.Item as={Link} to='/delivery/profile' key='user'
                text='Edit Profile' icon='user'/>
              <Dropdown.Item as={Link} to='/login' onClick={this.logout} 
                key='sign-out' text='Sign Out' icon='sign out'/>   
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withAuth(D_HomeBar)
