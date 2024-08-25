function Card(props) {
    const handleImageError = (e) => {
        e.target.src = "leo.jpg";
    };

    return (
        <>
            <div class="card" >
                <img src={props.poster} onError={handleImageError} id="image" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">
                        Year: {props.year}
                        <br />
                        Rating: {props.rating}
                        <br />
                        Director: {props.director}
                        <br />
                        Runtime: {props.runtime} mins</p>
                </div>
            </div>
        </>
    );
}

export default Card;
