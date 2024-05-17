
import './App.css'


import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar/Navbar'




import ThemeContext from './contexts/theme-context'
import { useState } from 'react'



function App() {

  const [theme , setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div  id="app-wrapper" theme-attribute = {theme}>
        <Navbar/>
        <MainRoutes/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
