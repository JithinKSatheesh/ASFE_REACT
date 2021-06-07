import React, { useState } from 'react';
import firebase from './Firebase';

export const AdminMessage = () => {

    const [messages, setMessages] = useState([]);
    const [loading,setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const db = firebase.firestore();
        const data = await db.collection('messages').orderBy("date", 'desc').get();

        console.log("data : ", data.docs);
        setMessages(data.docs.map(doc => doc.data()));
        setLoading(false)

    };


    return (
        <>
            <div className="container">
                <div className="space-50"></div>
                <div className="text-center">
                    <div className="h4 text-center">Messages</div> 
                </div>
                <div className="text-center">
                    <div className="btn btn-success" onClick={() => { fetchData(); }}>
                    {
                        loading?
                          <div class="spinner-border text-light" role="status"></div>
                          :
                          "Fetch Messages"
                      }
                    </div>
                </div>
            </div>
            <div className="p-2">
                {messages.map(item => {
                    return (
                        <div className="shadow p-3 m-2">
                            {console.log(item)}
                            <div className="p-3">
                                <div className="alert alert-light">
                                    date :  {Date(item.date)} <br />
                                  from : {item.name} <br />
                                  email : {item.email}
                                </div>
                                <div className="p3">
                                    {item.message}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </>
    );
};
