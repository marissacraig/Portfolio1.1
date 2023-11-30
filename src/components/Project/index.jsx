import "./index.css";

function Project() {
  // let newDate = new Date();
  // newDate = newDate.toLocaleDateString()

  return (
    <>
      <section className="post-section">
        <div className="post-header">
          <p>Resume Radar</p>
          <p>NodeJS</p>
        </div>
        <div className="post-body">
          <a href="https://github.com/marissacraig/ResumeRadar">
            <img className="tile" src="/Projects/resume-radar-logo.png" />
          </a>
        </div>
      </section>
      <section className="post-section">
        <div className="post-header">
          <p>Movie Munchies</p>
          <p>APIs</p>
        </div>
        <div className="post-body">
          <a href="https://marissacraig.github.io/MovieMunchies/">
            <img className="tile" src="/Projects/Movie Munchies-1.png" />
          </a>
        </div>
      </section>
      <section className="post-section">
        <div className="post-header">
          <p>JATE</p>
          <p>Webpack</p>
        </div>
        <div className="post-body">
          <a href="https://my-first-notetaker-565255065553.herokuapp.com/">
            <img className="tile" src="/Projects/JATE.png" />
          </a>
        </div>
      </section>
      <section className="post-section">
            <div className="post-header">
                <p>Gift Genius</p>
                <p>React</p>
            </div>
            <div className="post-body">
            <a href="https://the-gift-genius-f23e07b1b55d.herokuapp.com/"><img className="tile" src=""/></a>
            </div>


        </section>
      {/* <section className="post-section">
            <div className="post-header">
                <p></p>
                <p></p>
            </div>
            <div className="post-body">
            <a href=""><img className="tile" src="./src/assets/Projects/resume-radar-logo.png"/></a>
            </div>


        </section> */}
      {/* <section className="post-section">
            <div className="post-header">
                <p></p>
                <p></p>
            </div>
            <div className="post-body">
            <a href=""><img className="tile" src="gift-genius.png"/></a>
            </div>


        </section> */}
    </>
  );
}

export default Project;
