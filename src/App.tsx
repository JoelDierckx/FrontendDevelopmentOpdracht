import { FunctionComponent } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigation/Navigation';
import Routing from './navigation/Routing';

interface AppProps {
}

const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routing></Routing>
    </BrowserRouter>
  );
}
export default App

