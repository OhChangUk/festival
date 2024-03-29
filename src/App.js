import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./component/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Aside from "./component/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
// import Example from "./pages/Example";
// import Example2 from "./pages/Example2";
import Example3 from "./pages/Example3";
import Example4 from "./pages/Example4";
import Datepicker from "./pages/Datepicker";



function App() {
  const light = {
    colors: {
      BgColor: "#e9f1f6",
      Primary: "orange",
      Secondary: "orangered",
      Color: '#000',
      ContentBg: '#fff'
    }
  }
  const dark = {
    colors: {
      BgColor: "#333",
      Primary: "#272929",
      Secondary: "#e9e9e9",
      Color: '#e9e9e9',
      ContentBg: '#272929'
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
          <Route path="/ex3" element={<Example3 />} />
          <Route path="/ex4" element={<Example4 />} />
          <Route path="/date" element={<Datepicker />} />
          <Route path="/detail/:seq" element={<Detail/>}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
