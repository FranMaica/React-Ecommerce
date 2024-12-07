import React, { useState } from "react";

const ProductDetail = ({product}) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-lg">
                <button className="btn btn-primary mb-3">← Volver</button>
                <h2 className="text-center mb-4">Detalle del producto</h2>
                <div className="row align-items-center">
                    {/* Imagen del producto */}
                    <div className="col-md-6">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid rounded"
                        />
                    </div>
                    {/* Información del producto */}
                    <div className="col-md-6">
                        <h3>{product.title}</h3>
                        <p><strong>Categoría:</strong>{product.category}</p>
                        <p>
                            <strong>Descripción:</strong> {product.description}
                        </p>
                        <p><strong>Precio:</strong>{product.price}</p>
                        <p><strong>Stock:</strong> 8 unidades</p>
                        {/* Controles de cantidad */}
                        <div className="d-flex align-items-center mb-3">
                            <button
                                className="btn btn-outline-secondary me-2"
                                onClick={decreaseQuantity}
                            >
                                -
                            </button>
                            <span className="fs-5">{quantity}</span>
                            <button
                                className="btn btn-outline-secondary ms-2"
                                onClick={increaseQuantity}
                            >
                                +
                            </button>
                        </div>
                        {/* Botón de agregar al carrito */}
                        <button className="btn btn-success w-100">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
