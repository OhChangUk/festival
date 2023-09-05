import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./component/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Aside from "./component/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
// import Example from "./pages/Example";
// import Example2 from "./pages/Example2";
// import Example3 from "./pages/Example3";



function App() {
  const light = {
    colors: {
      Primary: "orange",
      Secondary: "orangered"
    }
  }
  const dark = {
    colors: {
      Primary: "#272929",
      Secondary: "#e9e9e9"
    }
  }
  const [themeConfig, setThemeConfig] = useState("light")
  
  const DarkMode = themeConfig === 'light' ? light : dark
  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? "dark" : "light")
  }


  return (
    <>
      <ThemeProvider theme={DarkMode}>
        <GlobalStyle />
        <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig}/>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/" element={<Example3 />} /> */}
          <Route path="/detail" element={<Detail/>}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
