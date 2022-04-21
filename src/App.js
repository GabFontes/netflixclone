import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import InitialPage from './pages/InitialPage'
import SearchPage from './pages/Search'

class App extends React.Component {
  render() {
    return <SearchPage />
    //(
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route exact path="/search" component={SearchPage} />
    //       <Route exact path="/" component={InitialPage} />
    //       {/* <Route path="*" component={NotFound} /> */}
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    //);
  }
}

export default App;
