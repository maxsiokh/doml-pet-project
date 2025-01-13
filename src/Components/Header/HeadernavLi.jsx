import React from 'react'

export default function HeadernavLi({ text, link }) {
	return (
		<li className='max-xl:text-right max-xl:pt-4'>
			<a className='max-xl:text-3xl max-xl:font-extrabold' href={link}>
				{text}
			</a>
		</li>
	)
}
