import React from 'react'

export default function Reviews() {
	return (
		<div>
			<div className='flex px-20 pt-24 pb-28 items-center rounded-3xl inset-0 rounded-full bg-gradient-to-r from-pink-600 via-[#5200FF] to-cyan-300'>
				<img className='max-w-64' src='revis.png' alt='' />
				<div id='text' className='text-left space-y-3 '>
					<p className='text-xl font-semibold '>
						It's all about getting your message in front of the right audience
						and creating those valuable relationships. Learn More about how DOML
						can help you do just that - all with a simple, easy-to-use platform.
					</p>
					<h4 className='text-2xl font-bold '>Amaka Micheal</h4>
					<p className='text-xl font-light'>
						Media Executive, Buying & Control
					</p>
					<img src='discord.png' className='max-w-24 /' alt='' />
				</div>
			</div>
		</div>
	)
}
