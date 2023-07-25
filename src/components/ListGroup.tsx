import { SetStateAction, useState } from "react";
import cityData from "../assets/cityData";

const errorMessage = () => {
	return !cityData && <p>No cities found!</p>;
};

interface ListGroupProps {
	itemData: any[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ itemData, heading, onSelectItem }: ListGroupProps) {
	const [selectedItem, setSelectedItem] = useState(-1);

	const handleSelectItem = (index: SetStateAction<number>, item: string) => {
		setSelectedItem(index);
		onSelectItem(item);
	};

	return (
		<>
			<h1>List of {heading}</h1>
			{errorMessage()}
			<ul className="list-group">
				{itemData.map((item, index) => (
					<li
						key={item.id}
						className={
							selectedItem === index
								? "list-group-item active"
								: "list-group-item"
						}
						onClick={() => {
							handleSelectItem(index, item.name);
						}}
					>
						{item.id} : {item.name}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
