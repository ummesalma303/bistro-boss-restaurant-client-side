import React from 'react';
// import menu from '../../../assets/home/featured.jpg'
import featured from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div>
            <div className="h-[80vh] bg-center bg-fixed bg-featured my-20">

                <div className="bg-[#00000049] text-white flex justify-center items-center  h-full  w-full px-36 ">
                    <img className=' h-56 object-cover aspect-video ' src={featured} alt="" />
                    <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white border-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;