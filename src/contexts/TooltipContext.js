/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";

export const ToastContext = createContext();

const ToastContextProvider = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const openToast = () => {
		setIsOpen(true);
	};

	useEffect(() => {
		setTimeout(() => {
			setIsOpen(false);
		}, 1500);
	}, [isOpen]);

	return (
		<ToastContext.Provider value={{ isOpen, openToast }}>
			{props.children}
		</ToastContext.Provider>
	);
};

export default ToastContextProvider;
