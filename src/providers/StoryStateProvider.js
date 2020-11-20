import { useReducer, createContext, useCallback, useContext } from 'react';

const initialState = {
	hasChapter2Init: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'chapter.init':
      return {
				...state,
				hasChapterInit: true
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
		initChapter: useCallback(() => {
			dispatch({ type: 'chapter.init' })
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
