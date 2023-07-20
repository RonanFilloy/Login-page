import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import {CustomThemeProvider} from './contexts/ThemeContext';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './styles/App.css';
import {LanguageProvider} from './contexts/LanguageContext';

const theme = createTheme();

function App() {
  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
