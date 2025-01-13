import axios from 'axios';

export const imageUpload=async(imageData)=>{
    const formData = new FormData()
        formData.append("image",imageData)
        // console.log(formData.get('image'))
    const {data} =await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formData)
    // console.log(data.data.display_url)
    return data.data.display_url
}