import React from 'react';
import './products.css';
import { BsCartPlus, BsCartXFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartAction,removeFromCartAction } from '../../redux/cartActions';

const ProductCard = ({ product }) => {
	const { pathname } = useLocation();
	const isInCart = pathname.includes('cart');
	console.log('is', isInCart);
    
	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(addToCartAction(product))
	}
	const removefromcart = () => {
		dispatch(removeFromCartAction(product.name))
	}
	return (
		<div className='product-card'>
			{isInCart && (
				<button className='del-product' onClick={removefromcart}>
					<BsCartXFill />
				</button>
			)}
			<img src={product.image} alt={product.name} />
			<div className='product-details'>
				<h3>
					{product.name}
					{isInCart && <span> x ({product.quantity})</span>}
				</h3>
				<h5>{product.ingredients}</h5>
				<div className='product-footer'>
					{isInCart ? (
						<>
							<button>
								<AiOutlinePlus />
							</button>
							<h3>{product.price}EGP</h3>
							<button>
								<AiOutlineMinus />
							</button>
						</>
					) : (
						<>
							<h3>{product.price}EGP</h3>
							<button onClick={addToCart}>
								<BsCartPlus />
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
