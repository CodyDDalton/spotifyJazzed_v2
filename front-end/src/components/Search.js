import React, {useState} from "react";
import axios from "axios";
import SearchItem from "../components/models/SearchItem";


export default function Search(props){

    const [input, setInput ] = useState("");
    const [selected, setSelected ] = useState("artist");
    const [results, setResults ] = useState([]);

    const getResults = async (res, req) =>{
        //custom search using user input, search type selection, and US market
        axios.get(`https://api.spotify.com/v1/search?q=${input}&type=${selected}&market=US`, {
            headers: {
                //specifying expected content type to be returned
                "Accept": "application/json",
                "Content-Type": "application/json",
                //using the access token to get permission for API return
                "Authorization": "Bearer "+props.accessToken,
            },
        })
        .then(response => {
            //if there is any response, hide the 'no results to display' message
            if(response.data.length !== 0){
                console.log("No results");
            }
            //if the selected search type is 'artist' follow the deconstruction to the appropriate result items
            if(selected === 'artist'){
                const items = response.data.artists.items;
                const data = [];
                for(let i = 0; i <= 9; i++){
                    let item = items[i];
                    //if there is an image property, push to data from result array -- used to prevent no image crash bug
                    if(item.images[0].url.length !== 0){
                        data.push(item)
                    }
                    setResults(data);
                }
            }
            //if the selected search type is 'album' follow the deconstruction to the appropriate result items
            if(selected === 'album'){
                const items = response.data.albums.items;
                const data = [];
                for(let i = 0; i <= 9; i++){
                    let item = items[i];
                    //if there is an image property, push to data from result array -- used to prevent no image crash bug
                    if(item.images[0].url.length !== 0){
                        data.push(item)
                    }
                    setResults(data);
                }

            }
            //if the selected search type is 'album' follow the deconstruction to the appropriate result items
            if(selected === 'audiobook'){
                const items = response.data.audiobooks.items;
                const data = [];
                for(let i = 0; i <= 9; i++){
                    let item = items[i];
                    //if there is an image property, push to data from result array -- used to prevent no image crash bug
                    if(item.images[0].url.length !== 0){
                        data.push(item)
                    }
                    setResults(data);
                }
            }
            
        })
        .catch(error => {
            console.error(error)
        })

    }

    const handleSelect = (event) => {
        //set selection state to value of option clicked on by the user
        const selection = event.target.value;
        setSelected(`${selection}`);
        console.log(selected, event.target.value);
    }

    const handleInput = (input) => {
        //set the input state to match the user input
        setInput(input)
        console.log(input, props.accessToken);
        //invoke the getResults function to initiate search
        getResults()
    }

    return(
        <div className="Search">
            <div style={{display:"flex", flexDirection:"row"}}>
                <input className="SearchBox" id="SearchBox" onChange={((e) => handleInput(e.target.value))}></input>
                <select className="SearchButn" id="SearchButn" onChange={((e) => handleSelect(e))}>
                    <option value="artist">ARTISTS</option>
                    <option value="album">ALBUMS</option>
                    <option value="audiobook">AUDIOBOOKS</option>
                </select>
            </div>
            <div id="resultsView" className="ResultsGrid">
                {input.length > 1 ? 
                    results.map(result =>  
                        <SearchItem className="SearchItem"
                            link={result.external_urls.spotify}
                            imgSrc={result.images[0].url}
                            imgAlt={result.name}
                            title={result.name}
                    />
                    ) : 
                    <div id="Results-placeholder" style={{height:"60vh"}}></div>
                }
            </div>
        </div>
    )
}