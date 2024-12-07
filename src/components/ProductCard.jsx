export default function ProductCard({ product }) {
let handleClick=()=>{}
    return (
        // <article style={{border: "1px solid black", padding: 10}}>
        //     <h3>{product.title}</h3>
        //     <p> {product.description}</p>
        //     <span> price:${product.price}</span>
        // </article><div class="card" style="width: 18rem;">
        <div className="card" style={{ width: "18rem", margin: "0 auto", marginTop: "60px" }}>
            <img src={product.image} className="card-img-top" alt="imagen" style={{height: "285px", width:"285px"}}/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">price:${product.price}</li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-success" onClick={handleClick}>Ver Detalles</button>
            </div>
        </div>
    )
}
