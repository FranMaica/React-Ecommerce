import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import ProductCard from "./ProductCard";

export default function HombreContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then((data) => setProducts(data));
    }, []);

    return (
        <>
            <section>
                <div className="row">
                {products.map((product) => (
                    <div className="col">
                    <ProductCard key={product.id} product={product} />
                    </div>
                ))}
                </div>
            </section>
        </>
    );
}


