import "./App.css";
import PersonInfo from "./PersonInfo";
const App = () => (
  <div className="App">
    <PersonInfo name=" Tristan, Doe " age={82} hairColor=" brown" />
    <PersonInfo name=" Paul, Doe " age={22} hairColor=" brown" />
    <PersonInfo name=" Smith, Doe " age={43} hairColor="  white" />
    <PersonInfo name=" Maria, Doe " age={34} hairColor=" brown" />
  </div>
);

export default App;
