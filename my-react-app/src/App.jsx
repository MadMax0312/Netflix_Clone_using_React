
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import {popular, action, adventure, comedy, crime, documentary, drama, family, banner} from './urls'
import Banner from "./components/Banner/Banner"
import RowPost from "./components/RowPost/RowPost"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Banner url={banner} name={'No Name'}/>
      <RowPost url={popular} title='Popular on Netflix'/>
      <RowPost url={action} title='Action'/>
      <RowPost url={adventure} title='Adventure'/>
      <RowPost url={comedy} title='Animation'/>
      <RowPost url={crime} title='Comedy'/>
      <RowPost url={documentary} title='Crime'/>
      <RowPost url={drama} title='Documentary'/>
      <RowPost url={family} title='Drama'/>
    </div>
  )
}

export default App
