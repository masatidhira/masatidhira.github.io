import { useState, useEffect } from "react";
import NoiseLayer from "./components/NoiseLayer";
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navigation";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setShow(true), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <NoiseLayer />
      {!show && <LoadingScreen />}
      <Navigation />
      <ProfilePage />
    </>
  );
};

export default App;
