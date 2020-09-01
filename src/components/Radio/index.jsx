import React from "react";

const Main = () => {
  return (
    <div style={{ padding: 20, margin: 40 }}>
      <iframe
        title="radio"
        src="//www.zeno.fm/player/radio-sonhar"
        width="575"
        height="240"
        frameborder="0"
        scrolling="no"
      />
      <div>
        <a
          href="https://www.zeno.fm/radio-sonhar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir para a página oficial da Rádio Sonhar
        </a>
      </div>
    </div>
  );
};

export default Main;
