import "./../../App.css";
import { Fragment, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { Navigate } from "react-router-dom";
import {useState} from 'react';

const unityContext = new UnityContext({
  productName: "Test",
  companyName: "Metacog",

  loaderUrl: "../../../unity/test/unityTest.loader.js",
  dataUrl: "../../../unity/test/unityTest.data",
  frameworkUrl: "../../../unity/test/unityTest.framework.js",
  codeUrl: "../../../unity/test/unityTest.wasm",
});

function Test() {
  const [change, setChange] = useState(false);

  useEffect(function () {
    unityContext.on("GameOver1", function (username, score) {

      console.log("QUITTED = " + username);
      console.log("YEAHHHH", score);
      
      // return <Redirect to='/game/:id/switch'/>;

      // window.location.href = "/game/:id/switch"
      // history.push("/game/:id/switch");

      // browserHistory.push("/game/:id/switch");

      // props.history and props.location are available now inside this component
      // let navigate = useNavigate();
      // return navigate("/game/123/switch");
      setChange(true)      
    });
  }, []);

  return (
    !change ?
    <Fragment>
      <div className="wrapper">
        <div className="unity-wrapper">
          <Unity className="unity-canvas" unityContext={unityContext} />
        </div>
        <h6>
          Made with love by{" "}
          <a href="https://github.com/jeffreylanters">Anand A</a>

        </h6>
      </div>
    </Fragment>
    : <Navigate to="/game/123/switch" replace={true}  />
  );
}

export default Test;
