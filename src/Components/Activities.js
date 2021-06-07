import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import ScrollMenu from 'react-horizontal-scrolling-menu';

export default function Activities(props) {
    
    const [activity, setActivity] = useState([])
    

    useEffect(()=>{

        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection('activities').orderBy("date", 'desc').get();
    
            console.log("data : ", data.docs);
            setActivity(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()

    },[])

    const Activity_list = ()=>(
        activity.map(item=>(
            <div className="col col-6 col-lg-3 mr-4">
                <div style={{width:'250px'}} className="card mr-4 shadow bg-white">
                    <div className="p-2">
                        <img src={item.image} style={{width:'100%'}} className='img-fluid' alt="" />
                        <div className="h5">
                            {item.title}
                        </div>
                        <div >
                            {item.content}
                        </div>
                    </div>
                </div>
            </div>
        ))
    )

    const _activity_list = Activity_list()

    return (
        <>
         <section id="activities" className="bg-light">
    <div className="row bg-warning">
        <div className="space-20"></div>
        <div className="col col-12 text-center h2 underline-yellow">
            ACTIVITIES
        </div>
        <div className="space-20"></div>
    </div>
    <div className="container">
        <div className="space-50"></div>
        {
            activity.length === 0 &&

            <div  className="row d-flex justify-content-center" id="spinner-1">
            <div  className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        }
        <div className="">
            {/* <div className='p-2' style={{width:'100%'}} >
                <ScrollMenu
                hideSingleArrow={true}
                inertiaScrolling={true}
                transition={1.5}
                wheel={false}
                data={_activity_list} />
                
            </div> */}
            <div id="activities_box" style={{overflowX:'scroll'}} className="row flex-nowrap card-group"  >
                <Activity_list/>
            </div> 
        </div>
        <div className="row">
            <div className="space-20"></div>
            <div className="col col-12">
                <div  className="alert alert-light text-center">
                   Scroll left or right
                </div>  
            </div>
        </div>
        <div className="space-50"></div>
      
    </div>
</section> 
        </>
    )
}
