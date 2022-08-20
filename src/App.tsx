import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { lightTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
