import { useState, useEffect, useRef } from "react";

interface ButtonProps {
	color?: "primary" | "secondary" | "danger" | "success" | "warning";
	onClick: (buttonText: string) => void;
}

const Button = ({ color = "primary", onClick }: ButtonProps) => {
	const buttonTextOptions = ["Show Item List", "Hide Item List"];
	const [isListShown, setIsListShown] = useState(false);
	const prevIsListShownRef = useRef(isListShown);

	useEffect(() => {
		if (prevIsListShownRef.current !== isListShown) {
			const newButtonText = isListShown
				? buttonTextOptions[0]
				: buttonTextOptions[1];
			onClick(newButtonText);
			prevIsListShownRef.current = isListShown;
		}
	}, [isListShown, onClick]);

	const handleButtonClick = () => {
		setIsListShown(!isListShown);
	};

	return (
		<button
			className={`btn btn-${color}`}
			onClick={() => {
				handleButtonClick();
			}}
		>
			{isListShown ? buttonTextOptions[1] : buttonTextOptions[0]}
		</button>
	);
};

export default Button;
