import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
//5:18:36



const Add = () => {
	const [image, setImage] = useState(false);

	const [data, setData] = useState({
		name: "",
		description: "",
		price: "",
		category: "handmade-craft"
	})

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData(data => ({
			...data,[name]:value
		}))
	}

	// useEffect(()=>{
	// 	console.log(data);
	// },[data])






	return (
		<div className='add'>
			<form className='flex-col'>
				<div className="add-image-upload flex-col">

					<label htmlFor="image">
						<img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
					</label>
					<p>Upload Image</p>
					<input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
				</div>

				<div className="add-product-name flex-col">
					<p>Product Name</p>
					<input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter prod name' />
				</div>

				<div className="add-product-description flex-col">
					<p>Prod Description</p>
					<textarea onChange={onChangeHandler} value={data.description} name="description" cols={36} rows={6} placeholder='Write product description'></textarea>
				</div>

				<div className="add-category-price">
					<div className="add-category flex-col">
						<p>Product Category</p>
						<select name="category" onChange={onChangeHandler} value={data.category}>
							<option value="handmade-craft">Handmade Crafts</option>
							<option value="gadgets">Gadgets</option>
							<option value="food">Food</option>
							<option value="clothing">Clothing</option>
							<option value="stationery">Stationery</option>
							<option value="books">Books</option>
							<option value="home-essentials">Home Essentials</option>
						</select>
					</div>

					<div className="add-price flex-col">
						<p>Product Price</p>
						<input onChange={onChangeHandler} value={data.price} type="number" placeholder='₹ Enter money' name='price' />
					</div>
					<button type='submit' className='add-button'>Add Product</button>
				</div>
			</form>
		</div>
	)
}

export default Add
