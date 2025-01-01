import { Navigation } from "./Routes/Navigation";
import "./Styles/app.scss";
import { useSelector } from "react-redux";

function App() {
  const toast = useSelector((state) => {
    return {
      toast: state.toastSlice,
    };
  });

  //sdfdsfsd

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
