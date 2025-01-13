import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React, { useEffect, useRef, useState } from 'react'
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const menuRef = useRef(null)

	// Закриття меню при кліку поза його межами
	useEffect(() => {
		const handleClickOutside = event => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMobileMenuOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<header className='flex justify-between items-center py-4 px-4 xl:px-8'>
			{/* Лого та навігація */}
			<nav className='flex items-center justify-between w-full xl:w-auto'>
				{/* Лого */}
				<div>
					<Logo />
				</div>

				{/* Кнопка гамбургер для мобільного меню */}
				<button
					className='xl:hidden flex items-center px-3 py-2 border rounded'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? '✖' : '☰'}
				</button>

				<ul
					ref={menuRef}
					className={`absolute top-0 right-0 h-full bg-black shadow-md xl:static xl:flex xl:space-x-6 xl:bg-transparent xl:shadow-none ${
						isMobileMenuOpen ? 'block' : 'hidden'
					}`}
				>
					<li className='relative max-xl:hidden'>
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

			{/* Додаткові елементи в хедері */}
			<div className='hidden xl:flex items-center space-x-4'>
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
