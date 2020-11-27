import { useState, createContext, useCallback, useContext } from 'react';

const NavBarContext = createContext();

const NavBarProvider = ({ children }) => {
	const [slideHeading, setSlideHeading] = useState('');

	const switchSlideHeading = useCallback((index) => {
		setSlideHeading(index);
	}, []);

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
