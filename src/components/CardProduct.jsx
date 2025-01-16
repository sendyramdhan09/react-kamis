import { useDispatch } from "react-redux"
import { addToCartProduct } from "../redux/productSlice"

const CardProduct = (product) => {
    const {
        product_name,
        description,
        stock,
        price,
        product_type,
        product_image
    } = product
    const dispatch = useDispatch()
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
                <img src={product_image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product_name}</h5>
                    <h5 className="card-title">{product_type}</h5>
                    <h6 className="card-title">Price: {price}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Stock: {stock}</p>
                    <button type="button" className="btn btn-success"
                        onClick={() => dispatch(addToCartProduct(product))}
                    >Add To Chart</button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct