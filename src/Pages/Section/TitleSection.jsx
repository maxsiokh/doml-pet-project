import React from 'react'

export default function TitleSection({ title, subtitle }) {
	return (
		<div>
			<h1 className=' bg-gradient-to-r from-pink-600 via-[#5200FF] to-cyan-300 bg-clip-text text-transparent'>
				{title}
			</h1>
			<h1 className=''>{subtitle}</h1>
		</div>
	)
}
