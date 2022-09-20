import React, { useState } from "react";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      name: "portraits",
      description: "Portraits of people in my life",
    },
    {
      name: "food",
      description: "Delicious delicacies",
    },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [pageSelected, setPageSelected] = useState("about");

  const returnPage = (pageSelected) => {
    if (pageSelected === "contact") {
      return <ContactForm />;
    } else if (pageSelected === "gallery") {
      return <Gallery currentCategory={currentCategory} />;
    } else if (pageSelected === "about") {
      return <About />;
    }
  };

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></Nav>
      <main>{returnPage(pageSelected)}</main>
    </div>
  );
}

export default App;
