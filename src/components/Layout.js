import { ThemeProvider } from 'emotion-theming';
import { themes } from '../styles/const';
import GlobalStyle from '../styles/global';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';

function Layout() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={themes.dark}>
        <Chapter1 />
      </ThemeProvider>
      <ThemeProvider theme={themes.light}>
        <Chapter2 />
      </ThemeProvider>
    </div>
  );
}

export default Layout;
