import React from "react";

import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
