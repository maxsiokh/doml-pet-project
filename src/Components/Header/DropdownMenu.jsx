import React from 'react'

export default function DropdownMenu() {
	return (
		<div
			id='dropdownNavbar'
			className='absolute  font-normal  divide-gray-100 rounded-lg shadow  dark:bg-[#272F43] dark:divide-gray-600'
		>
			<ul
				className='py-2 text-sm text-gray-700 dark:text-gray-400'
				aria-labelledby='dropdownLargeButton'
			>
				<li>
					<a
						href='#'
						className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					>
						Dashboard
					</a>
				</li>
				<li>
					<a
						href='#'
						className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					>
						Settings
					</a>
				</li>
				<li>
					<a
						href='#'
						className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					>
						Earnings
					</a>
				</li>
			</ul>
			<div className='py-1'>
				<a
					href='#'
					className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
				>
					Sign out
				</a>
			</div>
		</div>
	)
}
