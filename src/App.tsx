import { Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginPage from "./components/login";
import NotFound from "./components/notFound";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate replace to="login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="not-found" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
