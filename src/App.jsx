import "./App.scss";
import ScreenFirst from "./components/ScreenFirst";
import ScreenThree from "./components/ScreenThree";
import ScreenTwo from "./components/ScreenTwo";
import ScreenFour from "./components/ScreenFour";
import Footer from "./components/Footer";


const arr = [
	{
		id: 1,
		img: 'coffee.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 0
	},
	{
		id: 2,
		img: 'info.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 10
	},
	{
		id: 3,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 0
	},
]

const arr2 = [
	{
		id: 1,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		title2: 'Brazil',
		price: 6.99,
		qt: 1
	},
	{
		id: 2,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		title2: 'Kenya',
		price:6.99,
		qt: 1
	},
	{
		id: 3,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		title2: 'Columbia',
		price: 10.73,
		qt: 1
	},
	{
		id: 4,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		title2: 'Brazil',
		price: 10.73,
		qt: 1
	},
	{
		id: 5,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		title2: 'Brazil',
		price: 10.73,
		qt: 1
	},
	{
		id: 6,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		title2: 'Brazil',
		price: 10.73,
		qt: 1
	},
	
]

function App() {



	return (
		<div className="App">
			<ScreenFirst/>
			<ScreenTwo/>
			<ScreenThree data={arr} />
			<hr />
			<ScreenFour data={arr2} />
			<Footer/>
			<div className="last_child">
			    <img src="/icons/beens.svg" className='filter_invert' alt="" />
			</div>
		</div>
	)
}

export default App;