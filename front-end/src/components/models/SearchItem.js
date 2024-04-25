export default function SearchItem(props){
    //props sent from the results layout
    return(
        <div id="SearchItem" className="SearchItem">
            <a href={props.link}><img src={props.imgSrc} alt={props.imgAlt} id='img' className="SearchPic"/></a>
            <button className="Title-butn">
            <a href={props.link}><h5 className="Results-title" id='Results-title'>{props.title}</h5></a>
            </button>
        </div>
    )
}