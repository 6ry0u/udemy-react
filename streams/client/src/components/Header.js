import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
    <Link to="/" className="item">Streamy</Link>
      <div className="right menu">
      <Link to="/streams/new" className="item">New</Link>
      <Link to="/streams/delete" className="item">Delete</Link>
      <Link to="/streams/edit" className="item">Edit</Link>
      <Link to="/streams/list" className="item">List</Link>
      <Link to="/streams/show" className="item">Show</Link>

      </div>
    </div>
  )
}

export default Header
