import { Link } from "react-router-dom";

function Card(props) {
    const handleImageError = (e) => {
        e.target.src = "leo.jpg";
    };


    return (
        <>
            <Link to="/page"  style={{ textDecoration: 'none' }}> {/* Update with the correct route */}

                <div className="card" >
                    <img src={props.imgUrl} onError={handleImageError} id="image" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            Year: {props.year}
                            <br />
                            Rating: {props.rating}
                            <br />
                            Director: {props.director}
                            <br />
                            Runtime: {props.runtime} mins</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;
