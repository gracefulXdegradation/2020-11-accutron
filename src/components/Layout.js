import { ThemeProvider } from 'emotion-theming';
import { themes } from '../styles/const';
import GlobalStyle from '../styles/global';
import Chapter from './Chapter';

function Layout() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={themes.dark}>
        <Chapter />
      </ThemeProvider>
      <ThemeProvider theme={themes.light}>
        <Chapter />
      </ThemeProvider>
    </div>
  );
}

export default Layout;
