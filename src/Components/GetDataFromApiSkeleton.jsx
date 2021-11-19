import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const GetDataFromApiSkeleton = () => {
    return (
        <>
             
                <div className="card">
                <center ><Skeleton variant="circular" height={100} width={100} className="imgSkl" /></center>
                    <h3> <Skeleton  /></h3>
                    <p> <Skeleton  /></p>
                    <p> <Skeleton  /></p>
                </div>
            
        </>
    )
}

export default GetDataFromApiSkeleton;