import Wrapper from "./Wrapper";
import Header from "./Header";
import Main from "./Main";

import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
