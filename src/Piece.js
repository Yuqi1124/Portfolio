

function Piece(props) {
    let name = props.name;
    let text = props.text;
    let img = props.img;
    let link = props.link;
    return (
        <div className="card" style={{width: '25rem'}}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn stretched-link"><i
                        className="fa-2x fa-solid fa-arrow-right"></i></a>
                </div>
        </div>
    );
}

export default Piece;

