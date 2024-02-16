import BookList from "./components/BookList";
import NavBar from "./components/Navbar";
import NewBookForm from "./components/NewBookForm";
import BookContextProvider from "./context/BookContext";


function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <NavBar/>
      <BookList/>
      <NewBookForm/>
    </BookContextProvider>
    </div>
  );
}


export default App;
