import { Header } from "./components/header/Header";
import VideoView from "./sections/videoView/VideoView";
import Featured from "./sections/featured/Featured";
import Landing from "./sections/landing/Landing";
import BestDeal from "./sections/bestDeal/bestDeal";
import Properties from "./sections/properteis/Properties";
import Contactus from "./sections/contactUs/ContactUs";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Featured />
        <VideoView />
        <BestDeal />
        <Properties />
        <Contactus />
        <Footer />
      </main>
    </>
  );
}

export default App;
