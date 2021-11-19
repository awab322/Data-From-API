import React,{useState , useEffect} from 'react'

import GetDataFromApiSkeleton from "./GetDataFromApiSkeleton";
import GetDataFromApiHeading from "./GetDataFromApiHeading";
import "./GetDataFromApi.css"

import axios from "axios";

const GetDataFromApi = () => {

let[api , getApi] = useState([]);
let[isLoading , setIsLoading] = useState(true);

useEffect(() => {
    setTimeout(() => {
        axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
        .then(res=>{
            getApi(res.data)
            setIsLoading(false)
        })
    }, 2000);

}, [])

    return (
        <>
        <GetDataFromApiHeading/>
        <div className="app">
        {
            isLoading?
            <>
            <GetDataFromApiSkeleton/>
            <GetDataFromApiSkeleton/>
            <GetDataFromApiSkeleton/>
            <GetDataFromApiSkeleton/>
            <GetDataFromApiSkeleton/>
            <GetDataFromApiSkeleton/>
            <GetDataFromApiSkeleton/>
            <GetDataFromApiSkeleton/>
            </>
            :
            api.map((val)=>{
                    return (
                        <div className="card">
                        <img className="image" src={"https://joeschmoe.io/api/v1/" + val.first}  alt="Image" />
                        <h3 className="name">{val.first} {val.last}</h3>
                        <p className="email">{val.email}</p>
                        <p className="address">{val.address}</p>
                    </div>
                    )
                })

        }
 
           </div>
        </>
    )
}

export default GetDataFromApi;