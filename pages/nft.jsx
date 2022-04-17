import Header from "../components/Header";
import PunkCard from "../components/PunkCard";
import PunkCardCollection from "../components/PunkCardCollection";
import Main from "../components/Main";
import { useState } from "react";

function NFT() {
  const [mainPunk, setMainPunk] = useState({
    name: "Bandana Punk",
    token_id: 3,
    image_url:
      "https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w600",
    owner: {
      address: "0x72879579784575975987",
      profile_image_url:
        "https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w600",
    },
    profile_image_url:
      "https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w600",
  });
  return (
    <>
      <Header></Header>
      <Main mainPunk={mainPunk}></Main>
      <PunkCardCollection setMainPunk={setMainPunk}></PunkCardCollection>
    </>
  );
}

export default NFT;
