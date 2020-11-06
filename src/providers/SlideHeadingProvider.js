import { useState, createContext, useCallback, useContext } from 'react';

const SlideHeadingContext = createContext();

const SlideHeadingProvider = ({ children, headings }) => {
	const [slideHeading, setSlideHeading] = useState(headings[0]);

	const switchSlideHeading = useCallback((index) => {
		setSlideHeading(headings[index]);
	}, [headings]);

	const value = {
		slideHeading,
		setSlideHeading: switchSlideHeading,
	};

	return (
		<SlideHeadingContext.Provider value={value}>
			{children}
		</SlideHeadingContext.Provider>
	);
};

export default SlideHeadingProvider;

export const useSlideHeading = () => useContext(SlideHeadingContext);
