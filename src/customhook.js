import {useEffect, useState} from "react";

export async function downloadLocationDetail(){
    const rawResponse = await fetch("https://ipapi.co/json")
    const response = await rawResponse.json();
    return response;
}


export const useLocationDetail = () =>{

    const [locationDetail,setLocationDetail] = useState({"city":"","region":"","country_name":""});

    useEffect(()=>{

        async function updateLocation(){
            const response = await downloadLocationDetail();
            setLocationDetail(response);
        }

        updateLocation();

    },[])

    return locationDetail;

}
