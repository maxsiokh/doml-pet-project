import React from 'react'

const DROPMENU = [
	{ name: 'Product1' },
	{ name: 'Product2' },
	{ name: 'Product3' },
]
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
				{DROPMENU.map(item => (
					<li>
						<a
							href='#'
							className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						>
							{item.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
