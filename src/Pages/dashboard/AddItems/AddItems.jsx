import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
// import {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
//   Select,
//   Option,
// } from "@material-tailwind/react";

// import { IconButton } from "@material-tailwind/react";
// import { FaHome } from "react-icons/fa";
// import ReactDOM from "react-dom"
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    // const [image,setImage] = useState(null);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = async (data) => {
   
    /* -------------------------- post image in imdata -------------------------- */
    const imageFile = data.image[0]
    const formData = new FormData()
    formData.append('image',imageFile)
    const res = await axiosPublic.post(image_hosting_api,formData)
    // .then(res=>console.log(res)
    // )
    // .catch(err=>console.log(err))
    console.log(res    )

    /* ----------------------------- save menu data on db ---------------------------- */
    if (res.data.success) {
        const menuItem = {
            name: data.name,
            image: res.data.data.display_url,
            category: data.category,
            price: parseFloat(data.price),
            recipe:data.details
        }
        // console.log(menuItem)
 await axiosSecure.post(`/menu`,menuItem)
        .then(res=>{
            // console.log(res.data)
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        })
        .catch(err=>console.log(err))
    }

  };
  

  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"What's new?"}
      ></SectionTitle>

      <div className=" flex justify-center items-center">
        {/* <Card color="transparent" shadow={false} className="bg-[#F3F3F3] p-6"> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-[700px] bg-[#F3F3F3] p-6 rounded-md"
        >
          {/* recipe name */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="name" {...register("name",{ required: true })}
              className="input input-bordered w-full"
            />
            {errors.name&& <p className='text-red-500' role="alert">this is required</p>}
          </label>

          {/* price & category */}
          <div className="flex flex-row-reverse gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                name="price" {...register("price",{ required: true })}
                className="input input-bordered w-full "
              />
            {errors.number&& <p className='text-red-500' role="alert">this is required</p>}

            </label>
            {/* category */}
            <label className="form-control w-full mt-3">
              <label>Category*</label>
              <select
                className="select select-bordered"
                {...register("category",{ required: true })}
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            {errors.category&& <p className='text-red-500' role="alert">this is required</p>}

            </label>
          </div>
          {/* textarea */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea {...register("details",{ required: true })}
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Recipe Details"
            ></textarea>
            {errors.details&& <p className='text-red-500' role="alert">this is required</p>}

          </label>
          <div className="py-3">
            <input type="file" name="image" id="" {...register("image",{ required: true })}/>
          </div>

          <button className="px-6 py-3 bg-black text-white flex items-center">
            Add Items <FaUtensils className="ml-1" />
          </button>
        </form>
        {/* </Card> */}
      </div>
    </div>
  );
};

export default AddItems;
