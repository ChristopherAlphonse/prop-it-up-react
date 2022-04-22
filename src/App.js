import "./App.css";
import PersonInfo from "./PersonInfo";
const App = () => (
  <div className="App">
    <PersonInfo name=" Tristan, Doe " age=" 23" hairColor=" brown" />
    <PersonInfo name=" Paul, Doe " age=" 74" hairColor=" brown" />
    <PersonInfo name=" Smith, Doe " age=" 3" hairColor="  white" />
    <PersonInfo name=" Maria, Doe " age=" 33" hairColor=" brown" />
  </div>
);

export default App;
