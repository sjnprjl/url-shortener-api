import { GlobalStyle } from "./theme/global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/themes";
import { Main } from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OriginalUrl } from "./components/OriginalUrl";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:shortUrl" element={<OriginalUrl />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
