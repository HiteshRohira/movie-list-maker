import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen, closeModal }}>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
