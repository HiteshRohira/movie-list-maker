import React, { useContext } from "react";
import { ToastContext } from "../contexts/TooltipContext";

const Alert = () => {
	const { isOpen } = useContext(ToastContext);
	return (
		isOpen && (
			<div className="alert">
				<p>Movie added to your list !</p>
			</div>
		)
	);
};

export default Alert;
