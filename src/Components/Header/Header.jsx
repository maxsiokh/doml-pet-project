import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React, { useState } from 'react'

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<div className='flex justify-between'>
			<nav className='flex '>
				<a href='/' className=' text-2xl flex items-center font-bold'>
					<img src='logo.svg' className='w-6 pr-1' alt='' />
					<span>DOML</span>
				</a>

				<div className='list-none flex items-center '>
					<ul className='flex justify-between space-x-6 pl-3 text-base'>
						<li>
							<li>
								<a
									className=''
									href=''
									onClick={e => {
										e.preventDefault()
										setOpen(prevOpen => !prevOpen)
									}}
								>
									Product <KeyboardArrowDownIcon />
								</a>

								{open && (
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
								)}
							</li>
						</li>
						<li>
							<a href=''>Team</a>
						</li>
						<li>
							<a href=''>Enterprise</a>
						</li>
						<li>
							<a href=''>Explore</a>
						</li>
						<li>
							<a href=''>Marketplace</a>
						</li>
						<li>
							<a href=''>Pricing</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className='flex justify-between'>
				<input
					className='bg-[#272F43] text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none'
					type='text'
					placeholder='Search'
				/>
				<div className='flex justify-between space-x-4 pl-4'>
					<button>Sign In </button>
					<button>Sign Up</button>
				</div>
			</div>
		</div>
	)
}
