import React from 'react'
import FullLine from '../Components/Line/FullLine'

export default function Footer() {
	return (
		<footer className='space-y-1'>
			<FullLine />
			<div className='flex justify-between'>
				<p>Copyright © 2022 DOML. All rights reserved.</p>
				<p>Terms of Use & Privacy Policy</p>
			</div>
		</footer>
	)
}
