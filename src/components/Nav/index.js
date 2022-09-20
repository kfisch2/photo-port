import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    pageSelected,
    setPageSelected,
  } = props;



  // useEffect hook
  // mutations or any other side effects are not allowed inside
  // the main body of a component, thus we define them as a function
  // outside of the main body
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
    // why does this still work without the second argument?
    // array arg directs the hook to re-render the component
    // on changes to the value of its state
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" arial-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setPageSelected("about")}
            >
              About me
            </a>
          </li>
          <li className={`mx-2`}>
            <span onClick={() => setPageSelected("contact")}>Contact</span>
          </li>
          {/* parentheses around map cb */}
          {/* return a single JSX element */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                pageSelected 
            
              }`}
              key={category.name}
            >
              {/* onClick expecting cb function  */}
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setPageSelected("gallery");
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
