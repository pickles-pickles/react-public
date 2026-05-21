import { Route, Switch } from 'react-router-dom'
import ScrollView from './ScrollView'

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ScrollView}></Route>
      </Switch>
      {/* <Footer /> */}
    </>
  )
}

export default Main
