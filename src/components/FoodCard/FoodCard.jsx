import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({ menu }) => {
  const [ _,refetch] =useCart();
  console.log( refetch)

  
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, image, name, recipe, price } = menu;
  const handleAddToCart = () => {
    const cartItem = {
      menuId: _id,
      email: user?.email,
      image,
      name,
      recipe,
      price,
    };
    if (user && user?.email) {
      axiosSecure.post("http://localhost:5000/cart", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} added to your cart`,
                showConfirmButton: false,
                timer: 1500
            });
            // refetch cart to update the cart items count
            refetch();
        }
          
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        title: "please logged in",
        text: "Please Login to the add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "please login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute top-4 right-6 bg-slate-900 text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
