import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";

import { ProductGrid } from "./components/ProductGrid";
import { SearchBar } from "./components/SearchBar";
import { SearchContextProvider } from "./context/SearchContext";
import { CartVisualizer } from "./components/CartVisualizer";
import { DEFAULT_THEME } from "./theme";

import "./App.css";

const App = () => (
  <div id="root" className="App">
    <IntlProvider messages={{}} locale="cs" defaultLocale="cs">
      <ThemeProvider theme={DEFAULT_THEME}>
        <SearchContextProvider>
          <SearchBar />
          <ProductGrid />
          <CartVisualizer />
        </SearchContextProvider>
      </ThemeProvider>
    </IntlProvider>
  </div>
);

export default App;
