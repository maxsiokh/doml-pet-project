import React from 'react'
const iconCompanies = [
	'Adobe.png',
	'Airbnb.png',
	'airtel.png',
	'Coca Cola.png',
	'Creative Cloud.png',
	'Discord.png',
	'drangote.png',
	'Ebay.png',
	'Facebook.png',
	'Figma.png',
	'firstbank.png',
	'Google cloud.png',
	'mtn.png',
	'Netflix.png',
	'paga.png',
	'Paypal.png',
	'Spotify.png',
	'Tux.png',
	'uba.png',
	'Zoom.png',
]
export default function Companies() {
	return (
		<>
			<div className='justify-items-center pt-36 grid grid-cols-5 gap-4'>
				{iconCompanies.map(item => (
					<img
						src={`/companies icons/${item}`}
						alt='item'
						className='w-24 h-24 object-contain'
					/>
				))}
			</div>
			<p className='font-extralight text-xl pt-16 pb-24'>
				Trusted by the world’s most ambitious teams.
			</p>
		</>
	)
}
