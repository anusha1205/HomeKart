import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';


const Add = ({url}) => { 
	// const url = "http://localhost:4000";
	const [image, setImage] = useState(false);

	const [data, setData] = useState({
		name: "",
		description: "",
		price: "",
		category: "empty"
	})

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData(data => ({
			...data, [name]: value
		}))
	}


	const onSubmitHandler = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("name", data.name)
		formData.append("description", data.description)
		formData.append("price", Number(data.price))
		formData.append("category", data.category)
		formData.append("image", image)
		const response = await axios.post(`${url}/api/product/add`, formData);
		if (response.data.success) {
			setData({
				name: "",
				description: "",
				price: "",
				category: "homemade-craft"
			})
			setImage(false)
			toast.success(response.data.message)
		} else {
			toast.error(response.data.message)
		}
	}


	//console thingy
	// useEffect(()=>{
	// 	console.log(data);
	// },[data])






	return (
		<div className='add'>
			<form className='flex-col' onSubmit={onSubmitHandler}>
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
							{/* <option value="empty">Select</option> */}
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
