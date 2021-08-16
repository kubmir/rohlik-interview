import { IntlProvider } from "react-intl";

import { ProductGrid } from "./components/ProductGrid";
import { SearchBar } from "./components/SearchBar";
import { SearchContextProvider } from "./context/SearchContext";

import "./App.css";

const App = () => (
  <div className="App">
    <IntlProvider messages={{}} locale="cs" defaultLocale="cs">
      <SearchContextProvider>
        <SearchBar />
        <ProductGrid />
      </SearchContextProvider>
    </IntlProvider>
  </div>
);

export default App;
