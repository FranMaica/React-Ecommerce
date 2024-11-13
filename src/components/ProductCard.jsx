export default function ProductCard ({product}) {
    return(
        <article style={{border: "1px solid black", padding: 10}}>
            <h3>{product.title}</h3>
            <p> {product.description}</p>
            <span> price:${product.price}</span>
        </article>
    )
}
