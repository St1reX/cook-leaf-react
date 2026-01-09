import "./App.css";
import { appContent } from "./routes/common";

import useFlyonUIInit from "./hooks/useFlyonUIInit";

import Layout from "./components/Layout";

function App() {
  useFlyonUIInit();

  return (
    <>
      <Layout Content={appContent}></Layout>
    </>
  );
}

export default App;
