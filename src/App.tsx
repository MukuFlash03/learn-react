// import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import cityData from "./assets/cityData";

import { useState } from "react";

function App() {
	const buttonTextOptions = ["Show Item List", "Hide Item List"];
	const [isListShown, setIsListShown] = useState(false);

	const handleSelectItem = (item: string) => {
		console.log(item);
	};

	const handleButtonClick = (buttonText: string) => {
		console.log(`${buttonText} : button clicked`);
		setIsListShown(!isListShown);
	};

	return (
		<>
			<Alert>
				Hello <b>World</b>!
			</Alert>
			<Button
				onClick={handleButtonClick}
				buttonText={
					isListShown ? buttonTextOptions[1] : buttonTextOptions[0]
				}
			></Button>
			<div>
				{/* <Message /> */}
				{isListShown && (
					<ListGroup
						itemData={cityData}
						heading="Cities"
						onSelectItem={handleSelectItem}
					/>
				)}
			</div>
		</>
	);
}

export default App;
