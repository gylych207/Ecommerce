import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  let isTrue = true;
  return <SidebarContainer>

    <aside className={`${isTrue ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className='logo' />
        <button className='close-btn' type='button'>
          <FaTimes />
        </button>
      </div>
    <ul className="links">
      {links.map(({id,text,url})=>{
        return <li key={id}>
          <Link to={url}>{text}</Link>
        </li>
      })}
      <li >
          <Link to='/checkout'>checkout</Link>
        </li>
    </ul>
    <CartButtons/>
    </aside>
  </SidebarContainer>
}



export default Sidebar
