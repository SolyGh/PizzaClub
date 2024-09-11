import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import './header.css';
import { useSelector } from 'react-redux';
const Header = () => {
	const cartLength = useSelector(state => state.cart.length)
	return (
		<header className='header'>
			<NavLink to="/" className='navbar-brand'>
				Pizza Hub
			</NavLink>

			<ul>
				<li>
					<NavLink
						className={({ isActive }) =>
							'nav-link' +
							(isActive ? 'nav-link-active' : '')
						}
						to="/"
					>
						Menu
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							'nav-link' +
							(isActive ? 'nav-link-active' : '')
						}
						to="/cart"
					>
						<div className='cart-link'>
							<span>{ cartLength }</span>
							<BsCart2 />
						</div>
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
