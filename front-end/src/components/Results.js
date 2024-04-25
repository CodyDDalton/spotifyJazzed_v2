import React, {useEffect} from "react";
import UI from '../components/UI';
import Search from './Search';

export default function Results(props){

    const name = props.name;
    const userUrl = props.userUrl;
    const logout = props.logout;

    useEffect(() => {
        document.getElementById("Toggle-spot").style.display = "none";
        
        console.log(localStorage.getItem("Results"));
        if(localStorage.getItem("mode") === "dark"){
            document.getElementById("App").style.backgroundColor = "#1A1919";
            document.getElementById("SearchButn").style.backgroundColor = "#5B5B5B";
            document.getElementById("SearchButn").style.color = "#FFFFFF";
            document.getElementById("SearchBox").style.backgroundColor = "#ffb7009f";
        }
        if(localStorage.getItem("mode") === "light"){
            document.getElementById("App").style.backgroundColor = "#ffffff";
            document.getElementById("SearchButn").style.backgroundColor = "#3D3D3D";
            document.getElementById("SearchButn").style.color = "#ffffffa2";
            document.getElementById("SearchBox").style.backgroundColor = "#65ff749c";
        }
    }, []);
    

    return(
        <div className="Page">
            <UI 
                name={name}
                userUrl={userUrl}
                logout={logout}
                />
            <Search 
                accessToken={props.accessToken}
                />
        </div>
    )
}