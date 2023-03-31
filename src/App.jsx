import './App.css'
import { Global_style } from './style_global'

import Home from './pages/Home'
function App() {
  return (
    <div className="App"> 
      <Global_style />
      <Home/>
    </div>
  )
}

export default App
