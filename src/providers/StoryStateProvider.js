import { useReducer, createContext, useCallback, useContext } from 'react';

const initialState = {
	hasChapter2Init: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'chapter2.init':
      return {
				...state,
				hasChapter2Init: true
			};
    default:
      throw new Error();
  }
}

const StoryStateContext = createContext();

const StoryStateProvider = ({ children, headings }) => {
	const [storyState, dispatch] = useReducer(reducer, initialState);

	const value = {
		...storyState,
		initChapter2: useCallback(() => {
			dispatch({ type: 'chapter2.init' })
		}, [dispatch])
	};

	return (
		<StoryStateContext.Provider value={value}>
			{children}
		</StoryStateContext.Provider>
	);
};

export default StoryStateProvider;

export const useStoryState = () => useContext(StoryStateContext);
