import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

export default function Layout({ Content }) {
  return (
    <>
      <div className="flex flex-col min-h-screen font-main">
        <div id="mainContainer" className="2xl:px-[18%] flex justify-center px-8">
          <div id="contentWrapper" className="max-w-7xl w-full">
            <Header></Header>
            <Navbar></Navbar>
            {Content}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
