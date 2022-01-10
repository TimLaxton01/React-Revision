import Header from "./components/Header";
import Tasks from "./components/Task";

function App() {
  return (
    <div className='container'>
      <Header title='Tracker' />
      <Tasks />
    </div>
  );
}

export default App;
