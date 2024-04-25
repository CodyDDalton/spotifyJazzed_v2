import SpotifyW from './images/spotifyW.png';

function UI(props){

    window.onload=() => {
        const checkbox = document.getElementById("checkbox");
        checkbox.addEventListener("change", function() {
            if (this.checked) {
              document.getElementById("App").style.backgroundColor = "#1A1919";
              document.getElementById("SearchButn").style.backgroundColor = "#5B5B5B";
              document.getElementById("SearchButn").style.color = "#FFFFFF";
              document.getElementById("SearchBox").style.backgroundColor = "#ffb7009f";

            } else {
              document.getElementById("App").style.backgroundColor = "white";
              document.getElementById("SearchButn").style.backgroundColor = "#3D3D3D";
              document.getElementById("SearchButn").style.color = "#ffffffa2";
              document.getElementById("SearchBox").style.backgroundColor = "#65ff749c";
            }
          });
    }

    return(
        <div style={{display:'flex', flexDirection:"row", backgroundColor:"#000000bb", width:"100%"}}>
            <div id="Login-zone" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"55%", marginBottom:"1%"}}>
            <div id="Greeting" style={{lineHeight:"10px", padding:"10px", color:"white", width:"45%", fontFamily:"'Courier New', Courier, monospace"}}>
                <div style={{display:'flex', flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <p style={{fontWeight:"600", letterSpacing:"1px", marginRight:"2px"}}>Hello <a href={props.userUrl} style={{color:"magenta", fontSize:"1.1rem", textTransform:"uppercase", fontWeight:"900", cursor:"pointer", textDecoration:"none"}}><i>{props.name}</i></a></p>
                    <button id='logout' onClick={(() => {
                        props.logout();
                    })} style={{background:"none", height:"25px", borderColor:"orange", color:"orange", fontFamily:"'Courier New', Courier, monospace"}}>Log Out</button>
                </div>
                <p style={{fontWeight:"600", marginTop:"2%"}}>Welcome to <i style={{fontSize:"1.1rem", fontWeight:"800", color:"lime"}}>♪Spotify Jazzed♫</i></p>
            </div>
            <img src={SpotifyW} alt="Spotify Jazzed"  style={{width:"100px", marginTop:"1.5%"}} id="logo" />
        </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", float:"right", paddingRight:"2%", paddingLeft:"36.9%", paddingBottom:"2.5%", marginTop:"1%"}}>
                <label for="toggle" id="Symbols" style={{letterSpacing:"8px", marginLeft:"10px", fontSize:"1.5rem", color:"white"}}>☼ ☾</label>
                <label class="switch" for="checkbox" id="toggle">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <div class="slider round" id="slider"></div>
                </label>
            </div>
        </div>
        
    )
}
export default UI;