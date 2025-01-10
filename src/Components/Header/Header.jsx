import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React, { useState } from 'react'
import SearchInput from '../Search/SearchInput'
import DropdownMenu from './DropdownMenu'
import HeadernavLi from './HeadernavLi'
import Logo from './Logo'

const MENU = [
	{ link: 'team', text: 'Team' },
	{ link: 'enterprise', text: 'Enterprise' },
	{ link: 'explore', text: 'Explore' },
	{ link: 'marketplace', text: 'Marketplace' },
	{ link: 'pricing', text: 'Pricing' },
]

export default function Header() {
	const [isProductMenuOpen, setIsProductMenuOpen] = useState(false)

	return (
		<header className='flex justify-between items-center py-4'>
			<nav className='flex items-center'>
				<Logo />
				<ul className='flex space-x-6 pl-3 text-base list-none'>
					<li className='relative'>
						<a
							href='#'
							className='cursor-pointer flex items-center'
							onClick={e => {
								e.preventDefault()
								setIsProductMenuOpen(prevState => !prevState)
							}}
						>
							Product <KeyboardArrowDownIcon />
						</a>

						{isProductMenuOpen && <DropdownMenu />}
					</li>
					{MENU.map(item => (
						<HeadernavLi key={item.link} text={item.text} link={item.link} />
					))}
				</ul>
			</nav>

			<div className='flex items-center space-x-4'>
				<SearchInput />
				<div className='space-x-4'>
					<button className='px-4 py-2 border rounded'>Sign In</button>
					<button className='px-4 py-2 bg-slate-50 text-black rounded'>
						Sign Up
					</button>
				</div>
			</div>
		</header>
	)
}
