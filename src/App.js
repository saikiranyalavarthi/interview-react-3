import Question2 from "./Coponents/useState";
import AxiosFetch from "./Coponents/AxiosFetch";
import Question3 from "./Coponents/useEffect";
import Parent from "./Coponents/Parent";
import Counter from "./Coponents/useReducer";
function App() {
  return (
    <div className="App">
<AxiosFetch/>
  <Question2/>
  <Question3/>
  <Counter/>
  <Parent/>

    </div>
  );
}

export default App;