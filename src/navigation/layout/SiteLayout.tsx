import React, { ReactNode } from "react";
import Header from "../../components/header/Header";
import { useHeaderContext } from "../../context/HeaderContext";
import Footer from "../../components/Footer";

interface MyComponentProps {
  children: ReactNode;
  // propName: string;
  // Add more props as needed
}

const SiteLayout: React.FC<MyComponentProps> = (props) => {
  const { toggleMenu, handleToggle } = useHeaderContext();

  const handleOutsideClick = (event: MouseEvent) => {
    const headerElement = document.getElementById("myHeader");

    if (headerElement && !headerElement.contains(event.target as Node)) {
      if (toggleMenu) {
        handleToggle();
      }
    }
  };

  React.useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener when the component unmounts

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ backgroundColor: "#f3f7fa" }}>
      <header id="myHeader" style={{ zIndex: 2 }}>
        <Header />
      </header>

      <main>
        <div className="mainSectionCont">{props?.children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SiteLayout;
