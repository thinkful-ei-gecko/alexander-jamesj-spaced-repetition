import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span className="Header__username">{this.context.user.name}</span>
        <nav>
          <Link to="/">My Dashboard</Link>{' '}
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link> <Link to="/register">Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header className="Header">
        <h1>
          <Link to="/">Syntrack</Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    )
  }
}

export default Header
