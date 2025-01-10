import React from 'react'

export default function HeadernavLi({ text, link }) {
	return (
		<li>
			<a href={link}>{text}</a>
		</li>
	)
}
