import { IntlProvider } from "react-intl";

import { ProductGrid } from "./components/ProductGrid";

import "./App.css";

const App = () => (
  <div className="App">
    <IntlProvider messages={{}} locale="cs" defaultLocale="cs">
      <p>Products</p>
      <ProductGrid />
    </IntlProvider>
  </div>
);

export default App;
