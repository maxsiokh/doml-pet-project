import React from 'react'

export default function Header() {
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
							<a className='' href=''>
								Product
							</a>
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
