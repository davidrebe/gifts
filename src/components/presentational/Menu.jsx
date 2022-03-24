import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function MenuComponent({ children, username, isAuthenticated, handleLogout }) {
    return (
      <React.Fragment>
        {isAuthenticated &&
        <Menu pointing inverted>
          <Link to="/gifts"><Menu.Item name="Gifts"/></Link>
          <Link to="/user"><Menu.Item name="Usuario"/></Link>

          <Menu.Menu position='right'>
            <Menu.Item onClick={handleLogout}>
              ({username}) - <Link to="/logout"> Cerrar sesión</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        }
        {children}
      </React.Fragment>
    ) 
}

MenuComponent.defaultProps = {
  children: [],
  username: "",
  isAuthenticated: false,
  handleLogout: () => {}
}

MenuComponent.propTypes = {
  children: PropTypes.array,
  username: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func,
}