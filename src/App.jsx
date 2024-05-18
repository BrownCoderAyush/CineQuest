
import './App.css'


import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar/Navbar'




import ThemeContext from './contexts/theme-context'
import { useEffect, useState } from 'react'



function App() {

  const [theme , setTheme] = useState('dark');
  useEffect(()=>{
    const userTheme = localStorage.getItem('app-theme');
    if(userTheme!=null){
        setTheme(userTheme);
    }
  },[]);
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
