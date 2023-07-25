// import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import cityData from "./assets/cityData";

function App() {
	const handleSelectItem = (item: string) => {
		console.log(item);
	};

	const handleButtonClick = (buttonText: string) => {
		console.log(`${buttonText} : button clicked`);
	};

	return (
		<>
			<Alert>
				Hello <b>World</b>!
			</Alert>
			<Button onClick={handleButtonClick}></Button>
			<div>
				{/* <Message /> */}
				<ListGroup
					itemData={cityData}
					heading="Cities"
					onSelectItem={handleSelectItem}
				/>
			</div>
		</>
	);
}

export default App;
