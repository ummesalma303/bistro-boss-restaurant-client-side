import { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu,setMenu] =useState([])
    const [loading,setLoading] = useState(true)
        useEffect(()=>{
            fetch('http://localhost:5000/menu')
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
               setMenu(data)
            })
            .catch(err=>console.log(err.message))
        },[])
        // console.log(menu)
    return [menu,loading]
};

export default useMenu;