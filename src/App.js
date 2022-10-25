import "npoplayer/src/scss/npoplayer.scss";
import NpoPlayer from "npoplayer";
import { useEffect } from "react";
window.npoplayer = NpoPlayer;

export default function App() {
  useEffect(() => {
    let container = document.getElementById("my-player");
    let options = {};
    const jwt = "hee";
    
    let player = new window.npoplayer(container, options);
    player.loadStream(jwt);
  }, []);

  return (
    <>
      <div style={{width: "50%", display: "flex", justifyContent: "center"}}>
        <div id="my-player"></div>
      </div>
    </>
  );
}
