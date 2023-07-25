import { useState, useEffect, useRef } from "react";

interface ButtonProps {
	color?: "primary" | "secondary" | "danger" | "success" | "warning";
	onClick: (buttonText: string) => void;
	buttonText: string;
}

const Button = ({ buttonText, color = "primary", onClick }: ButtonProps) => {
	return (
		<button
			className={`btn btn-${color}`}
			onClick={() => {
				onClick(buttonText);
			}}
		>
			{buttonText}
		</button>
	);
};

export default Button;
