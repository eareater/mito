import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { params } from "../params";

const SandboxLoader = () => {
  const history = useHistory();

  useEffect(() => {
    // Enable Sandbox parameters
    console.log("Enabling Sandbox Mode");
    params.showGodUI = true;
    params.debug = true;
    params.hud = true;

    // Redirect to main game
    history.push("/");
  }, [history]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#222',
      color: 'white',
      fontFamily: 'monospace'
    }}>
      <h1>Initializing Sandbox Mode...</h1>
    </div>
  );
};

export default SandboxLoader;
