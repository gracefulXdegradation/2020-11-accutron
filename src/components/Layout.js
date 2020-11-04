import styled from '@emotion/styled';
import GlobalStyle from '../styles/global';
import Chapter from './Chapter';

const FirstScreen = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Layout() {
  return (
    <div>
      <GlobalStyle />
      <FirstScreen>
        Hi
      </FirstScreen>
      <Chapter />
    </div>
  );
}

export default Layout;
