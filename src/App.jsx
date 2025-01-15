import './App.css'
import Header from './Components/Header/Header'
import Companies from './Pages/Companies'
import Footer from './Pages/Footer'
import Mail from './Pages/Mail'
import Reviews from './Pages/Reviews'
import Section from './Pages/Section/Section'

function App() {
	return (
		<div className='space-y-10'>
			<Header />
			<Section
				text='Our vision is to revolutionize the way brands and advertisers target, reach'
				srcImg='planeta.png'
			/>
			<Companies />
			<Section
				text='DOML is a digital media agency powered by AI technology providing real
					time, data-driven insights on your business and audience. The mission
					of DOML is to create the best experiences for companies through
					intelligent insights, powerful analytics and strategic execution.'
				srcImg='cube.png'
			/>
			<Section
				text='It is all about getting your message in front of the right audience and
					creating those valuable relationships. Learn More about how DOML can
					help you do just that - all with a simple, easy-to-use platform.'
				srcImg='about.png'
				reverse={true}
			/>
			<Reviews />
			<Section
				text='It is all about getting your message in front of the right audience and
					creating those valuable relationships. Learn More about how DOML can
					help you do just that - all with a simple, easy-to-use platform.'
				srcImg='pinkcube.png'
			/>
			<Section
				text='It is all about getting your message in front of the right audience and
					creating those valuable relationships. Learn More about how DOML can
					help you do just that - all with a simple, easy-to-use platform.'
				srcImg='figurka.png'
				reverse={true}
			/>
			<Mail />
			<Footer />
		</div>
	)
}

export default App
