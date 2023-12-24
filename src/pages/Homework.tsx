import React from "react";
import "../sass/Homework.scss";

export default function Home() {
  return (
    <div>
      <div className="headerContainer">
        <div className="bgContainer">
          <h2>Homework</h2>
          <p>
            Stay updated on upcoming homework assignments and deadlines. Make
            sure to check this section regularly for any new tasks or projects.
          </p>
        </div>
      </div>
      <div className="docContainer">
        <a
          href="https://docs.google.com/document/d/1XcI3jItGKmKyfNRSOe4jyoD5bBTw78wCWsQM8Eih7yQ/edit"
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Drive
        </a>
        <iframe
          width="800"
          height="700"
          title="homework"
          src="https://docs.google.com/document/d/e/2PACX-1vTM-cgsksx1hwx4shL-75p6QTwvLrgFvLyuL6bucPYlJ2WuXg5pWdfrfxi9ABNrokjokOJ4cnJxBQ7T/pub?embedded=true"
        ></iframe>
      </div>
      <div className="hwrkHeaderContainer">
        <div className="bgContainer">
          <h2>Classroom Schedule</h2>
        </div>
      </div>
      <div className="docContainer">
        <iframe
          width="800"
          height="700"
          title="class schedule"
          src="https://docs.google.com/document/d/e/2PACX-1vT_YxfprzlHA_54r_VGfyFqS-61UMLO2fC-vqfleZ9nUF1GAjuS2MWBmIugOVfXI7A4cO04nNNBD0Jw/pub?embedded=true"
        ></iframe>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
