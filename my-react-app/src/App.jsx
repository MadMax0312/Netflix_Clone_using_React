
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import {popular, action, adventure, war, thriller, comedy, crime, documentary, drama, family, fantasy, history, horror, romance, banner} from './urls'
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
      <RowPost url={family} title='Family'/>
      <RowPost url={fantasy} title='Fantasy'/>
      <RowPost url={history} title='History'/>
      <RowPost url={horror} title='Horror'/>
      <RowPost url={romance} title='Romance'/>
      <RowPost url={war} title='War'/>
      <RowPost url={thriller} title='Thriller'/>
    </div>
  )
}

export default App
