import { useReducer, createContext, useCallback, useContext } from 'react';

const initialState = {
	hasChapter2Init: false
};

function reducer(state, {type, value}) {
  switch (type) {
    case 'chapter.init':
      return {
				...state,
				hasChapterInit: value
			};
    default:
      throw new Error();
  }
}

const StoryStateContext = createContext();

const StoryStateProvider = ({ children }) => {
	const [storyState, dispatch] = useReducer(reducer, initialState);

	const value = {
		...storyState,
		initChapter: useCallback((value = true) => {
			dispatch({ type: 'chapter.init', value })
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
