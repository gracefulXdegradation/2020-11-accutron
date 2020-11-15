import { useState, createContext, useCallback, useContext } from 'react';

const NavBarContext = createContext();

const NavBarProvider = ({ children, headings }) => {
	const [slideHeading, setSlideHeading] = useState(headings[0]);

	const switchSlideHeading = useCallback((index) => {
		setSlideHeading(headings[index]);
	}, [headings]);

	const value = {
		slideHeading,
		setSlideHeading: switchSlideHeading,
	};

	return (
		<NavBarContext.Provider value={value}>
			{children}
		</NavBarContext.Provider>
	);
};

export default NavBarProvider;

export const useNavBar = () => useContext(NavBarContext);
