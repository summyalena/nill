import "./App.css";
import FormPage from "./comps/FormPage";
import Header from "./comps/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="splitcontainer">
        <div className="animated_texts">
          <p>Earn money while attending events</p>
          <p>It's simple</p>
          <p>Share links earn $$$</p>
        </div>

        <div>
          <span/>
          <span/>
          <span/>
          <div>
            <p>About Split
              </p>
              <p>Split is good and ready to deliver</p>
              <p>Split is good to fall in love with</p>
            </div>
        </div>
        <FormPage />
      </div>
    </div>
  );
}

export default App;
