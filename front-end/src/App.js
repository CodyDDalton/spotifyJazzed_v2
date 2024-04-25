import './App.css';
import React, {useEffect, useState} from 'react';
import { accessToken, logout, getUserProf } from './spotify.js';
import SpotifyB from './components/images/spotifyB.png';
import SpotifyW from './components/images/spotifyW.png';
import Login from './components/Login.js';
import Results from './components/Results.js';


function App() {

  const [ token, setToken ] = useState(null);
  const [ name, setName ] = useState(null);
  const [ userUrl, setUserUrl ] =useState(null);
  const [ logo, setLogo ] =useState(SpotifyB);


  useEffect(() => {

    if(token || localStorage.getItem("spotify_access_token") !== null){
      document.getElementById("Toggle-spot").style.display = "none";
    }
    if(!token || localStorage.getItem("spotify_access_token") === null){
      document.getElementById("Toggle-spot").style.display = "flex";
    }
    if(localStorage.getItem("mode") === "dark"){
      document.getElementById("App").style.backgroundColor = "#1A1919";
      setLogo(SpotifyW);
    }
    if(localStorage.getItem("mode") === "light"){
      document.getElementById("App").style.backgroundColor = "white";
      setLogo(SpotifyB);
    }
    if(localStorage.getItem("mode") === null){
      document.getElementById("App").style.backgroundColor = "white";
    }
    //set token state to match accessToken sent from spotify.js
    setToken(accessToken)
    const fetchData = async () => {
      try {
        //create variable data to fill with user profile data via the getUserProf function from spotify.js
        const {data} = await getUserProf();
        //set name state to user's display name
        setName(data.display_name)
        //set userUrl state to user's spotify url
        setUserUrl(data.external_urls.spotify)
      }
      catch(e) {
        console.error(e)
      }
    }
    //invoke the fetchData function above
    fetchData();
  }, []);

    window.onload=() => {
        const checkbox = document.getElementById("login-checkbox");
        checkbox.addEventListener("change", function() {
            if (this.checked) {
              document.getElementById("App").style.backgroundColor = "#1A1919";
              setLogo(SpotifyW);
              localStorage.setItem("mode", "dark");

            } else {
              document.getElementById("App").style.backgroundColor = "white";
              setLogo(SpotifyB)
              localStorage.setItem("mode", "light");
              
            //   if(!token){
            //     setLogin(<LoginLight />);
            //   }
              
            }
          });
    }

  return (
    <div className="App" id="App">
      <div className="Upper">
          <div id="Toggle-spot" style={{display:"flex", flexDirection:"column", justifyContent:"center", float:"right", paddingRight:"2%", paddingLeft:"37.14%", paddingBottom:"2.5%", backgroundColor:"none"}}>
              <label for="toggle" id="Symbols" style={{letterSpacing:"8px", marginLeft:"10px", fontSize:"1.5rem"}}>☼ ☾</label>
              <label class="switch" for="login-checkbox" id="toggle">
                  <input type="checkbox" id="login-checkbox" name="checkbox" />
                  <div class="slider round" id="slider"></div>
              </label>
          </div>
      </div>
      {!token ? (
        //if there is no access token stored in the token state, display the login layout connected to :8888/login
        <>
          <Login
            logo={logo} 
            />
        </>
      ) :  ( //otherwise display the results layout and pass it the token, name, and userUrl state values and logout function
        <>
          <Results 
            name={name}
            userUrl={userUrl}
            logout={logout}
            accessToken={token}
            />
        
        </>
      )}
    </div>
  );
}
export default App;

