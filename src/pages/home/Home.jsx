import "./module.Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="content">
            <p className="text-1">SO, YOU WANT TO TRAVEL TO</p>
            <h1 className="text-2">SPACE</h1>
            <p className="text-3">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="buttonContainer">
            <button className="buttonExplore">
              <p className="buttonText">EXPLORE</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
