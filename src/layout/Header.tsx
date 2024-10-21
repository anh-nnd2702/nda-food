import "./layout.scss";

const Header = () => {
  return (
    <div id="appHeader" className="d-flex flex-row">
      <div className="col-2">
        <a href="/">
          <img src={"vite.svg"} alt="App logo"></img>
        </a>
      </div>
      <div className="col-8">
        <h4 className="p-0 m-0">My Food app</h4>
      </div>
    </div>
  );
};

export default Header;
