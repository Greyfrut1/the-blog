import "./App.css";
import Header from "./Components/Header/Header";
import TitleBlog from "./Components/PageTitle";
import { useState, useEffect } from "react";
import BurgerMenu from "./Components/BurgerMenu";
import TeasersArticles from "./Components/TeasersArticles";
import TutorialDesign from "./Components/tutorialDesign";
import FirstFullBlock from "./Components/StaticBlock";
import PilihanEditor from "./Components/pilihanEditor";
import LatestArticles from "./Components/latestArticles";
import ArtikelLainnya from "./Components/ artikelLainnya ";
import ScrollToTop from "react-scroll-to-top";
import BackToTop from "./Components/BackToTop";
import axios from "axios";

function App() {
  const [isStyled, setIsStyled] = useState(false);

  function useAxios(url) {
    const [object, setObject] = useState([]);
    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
          setObject(response?.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    return object;
  }

  const burgerClick = () => {
    setIsStyled(!isStyled);
  };

  const styles = {
    display: isStyled ? "block" : "none",
  };
  const styles2 = {
    display: isStyled ? "none" : "block",
  };

  const titleBlog = useAxios("http://91.107.217.207/jsonapi/node/page");
  const logo = useAxios(
    "http://91.107.217.207/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image"
  );
  const menuItems = useAxios(
    "http://91.107.217.207/jsonapi/menu_link_content/menu_link_content"
  );
  const socialLinks = useAxios(
    "http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?include=field_social_links.field_icon_svg"
  );
  const firstTeaserArticle = useAxios(
    "http://91.107.217.207/blog-articles-first?_format=json"
  );
  const teasersArticles = useAxios(
    "http://91.107.217.207/blog-articles-second?_format=json"
  );
  const tutorialDesign = useAxios(
    "http://91.107.217.207/design-tutorials-first?_format=json"
  );
  const industriDesign = useAxios(
    "http://91.107.217.207/editors-choice?_format=json"
  );
  const pilihanEditor = useAxios(
    "http://91.107.217.207/editors-choice?_format=json"
  );
  const firstStaticBlock = useAxios(
    "http://91.107.217.207/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?include=field_image&resourceVersion=id%3A3"
  );
  const secondStaticBlock = useAxios(
    "http://91.107.217.207/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image"
  );

  return (
    <>
      <div className="hidden" style={styles}>
        <BurgerMenu onClick={burgerClick} />
      </div>
      <div style={styles2} className="font-poppins bg-[#ECECEC]">
        <div className="container max-w-[1280px] 2xl:max-w-1440 mx-auto bg-white">
          <div className="dark bg-[#121212] px-[20px] md:px-10 py-0 md:pt-5 md:pb-[40px]">
            <Header
              socialLinks={socialLinks}
              menuItems={menuItems}
              logo={logo}
              onClick={burgerClick}
            />
            <TitleBlog object={titleBlog} />
            <TeasersArticles
              firstTeaserArticle={firstTeaserArticle}
              teasersArticles={teasersArticles}
            />
          </div>
          <div className="whitearea py-[20px] px-0 md:px-[40px] md:pt-[60px] md:pb-[80px]">
            <TutorialDesign objects={tutorialDesign} />
          </div>
          <div>
            <FirstFullBlock object={firstStaticBlock} />
          </div>
          <div className="py-[20px] md:pt-[60px] md:pb-[40px]">
            <PilihanEditor title="Pilihan Editor" objects={pilihanEditor} />
          </div>
          <div>
            <FirstFullBlock object={secondStaticBlock} />
          </div>
          <div className="py-[20px] md:pt-[60px] md:pb-[40px] px-0 md:px-[40px]">
            <LatestArticles />
          </div>
          <div className="bg-[#121212] pt-[20px] pb-[40px] md:pt-[60px] md:pb-[40px]">
            <PilihanEditor title="Industri Design" objects={industriDesign} />
          </div>
          <div>
            <ArtikelLainnya />
          </div>
        </div>
        <BackToTop />
      </div>
    </>
  );
}

export default App;
