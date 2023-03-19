import(/* webpackPreload: true */ './assets/fonts/B612Mono-Regular.woff');
import(/* webpackPreload: true */ './assets/fonts/B612Mono-Bold.woff');
import(/* webpackPreload: true */ './assets/fonts/Brush-Flower.woff');
import(
  /* webpackPreload: true */ './assets/fonts/SaolDisplay-LightItalic.woff'
);
import(
  /* webpackPreload: true */ './assets/fonts/SaolDisplay-SemiboldItalic.woff'
);
import NoiseLayer from './components/NoiseLayer';
import Navigation from './components/Navigation';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <>
      <NoiseLayer />
      <Navigation />
      <ProfilePage />
    </>
  );
};

export default App;
