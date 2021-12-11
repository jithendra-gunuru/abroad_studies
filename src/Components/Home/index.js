import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import Rectangle1 from "./Rectangle1";
import Rectangle2 from "./Rectangle2";
import "./index.css"
function Index() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Rectangle1 />
      </div>
      <div>
      <Rectangle2 />
    </div>

    </div>
  );
}
export default Index;
