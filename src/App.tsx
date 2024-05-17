import FacebookLogin from "./components/FacebookLogin";
import GoogleLogin from "./components/GoogleLogin";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <FacebookLogin />
      <GoogleLogin />
    </div>
  );
}

export default App;
