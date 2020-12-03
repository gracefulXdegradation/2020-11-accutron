import { useState, createContext, useCallback, useContext } from 'react';

const NavBarContext = createContext();

const NavBarProvider = ({ children }) => {
	const [slideHeading, setSlideHeading] = useState('');
	const [shopLink, setShopLink] = useState(null);

	const value = {
		slideHeading,
		setSlideHeading: useCallback((index) => {
			setSlideHeading(index);
		}, []),
		shopLink,
		setShopLink
	};

	return (
		<NavBarContext.Provider value={value}>
			{children}
		</NavBarContext.Provider>
	);
};

export default NavBarProvider;

export const useNavBar = () => useContext(NavBarContext);
