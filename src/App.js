import RoutesMap from './Routes/Routes';
import GlobalStyle from "./Styles/GlobalStyle"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RoutesMap />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;