import { Link } from "react-router-dom";

function BeerCard({beer}){
    const {image_url, _id, name, tagline} = beer
    return(
        <div className="card col-4 cardStyle" style={{width: "18rem"}}>
            <img src={image_url} className="card-img-top cardImage" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{tagline}</p>
                <Link to={"/"+_id} className="btn btn-primary">Know more</Link>
            </div>
        </div>
    );
}

export default BeerCard;