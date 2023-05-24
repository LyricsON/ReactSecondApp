import "./App.css";
import ProfilePhoto from "./Component/profile/ProfilePhoto";
import FullName from "./Component/profile/FullName";
import Address from "./Component/profile/Address";

function App() {
  return (
    <div className="App">
      <main>
        <ProfilePhoto />
        <FullName />
        <Address />
      </main>
    </div>
  );
}

export default App;
