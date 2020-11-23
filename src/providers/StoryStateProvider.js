import { useReducer, createContext, useCallback, useContext } from 'react';

const StoryStages = {
	Preloader: -2,
	Video: -1,
	Chapter1: 0,
	Chapter2: 1
}

const initialState = {
	hasChapterInit: false,
	chapter: StoryStages.Preloader,
	ts: Date.now()
};

function reducer(state, {type, value}) {
  switch (type) {
    case 'chapter.init':
      return {
				...state,
				hasChapterInit: value
			};
		case 'chapter.set':
			return {
				...state,
				hasChapterInit: false,
				chapter: value,
				ts: Date.now()
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
			dispatch({ type: 'chapter.init', value: true })
		}, [dispatch]),
		setChapter: useCallback((value) => {
			dispatch({ type: 'chapter.set', value })
		}, [dispatch]),
	};

	return (
		<StoryStateContext.Provider value={value}>
			{children}
		</StoryStateContext.Provider>
	);
};

export default StoryStateProvider;

export const useStoryState = () => useContext(StoryStateContext);
