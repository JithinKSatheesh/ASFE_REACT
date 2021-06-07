import React, { useState,useEffect } from 'react'
import firebase from './Firebase'

export default function Contact(props) {

    const [values,setValues] = useState({
        name:'',
        email:'',
        message:'',
        error:false,
        loading : false
    })

    const handleChange = name => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("submit")
        setValues({...values,loading:true})
        const db = firebase.firestore()
        db.collection('messages').add({
            name : values.name,
            email:values.email,
            message : values.message,
            date : Date.now(),
        }).then((res=>{
            console.log(res)
            setValues({
                error: 'Message sent successfully',
                loading:false,
                name:'',
                email:'',
                message:'',
            })

        }))
        .catch(err=>{
            console.log(err)
            setValues({
                ...values,
                loading:false,
                error:'Something went wrong'
            })
        })

    }

  

    return (
        <>
          <section id="contact" class="bg-white">
        <div class="row bg-warning">
            <div class="space-20"></div>
            <div class="col col-12 text-center h2 underline-yellow">
               CONTACT
            </div>
            <div class="space-20"></div>
        </div>
        <div class="container">
            <div class="space-50"></div>
            <div class="row">
                <div class="col col-12 col-lg-6">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                                    <iframe title='map' width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=School%20of%20Engineering%2C%20CUSAT&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                    </div><style></style>
                        </div>
                </div>
                <div class="col col-12 col-lg-6 bg-light">
                    <form onSubmit={handleSubmit} id="form-contact">
                        <div class="form-group" >
                          <label for="email-contact">Email</label>
                          <input 
                            type="email" class="form-control" id="email-contact" aria-describedby="emailHelp" 
                            value={values.email}
                            onChange={handleChange('email')}
                            required/>
                        </div>
                        <div class="form-group">
                          <label for="name-contact">Name</label>
                          <input 
                            type="text" class="form-control" id="name-contact" 
                            value={values.name}
                                onChange={handleChange('name')}
                            required/>
                        </div>
                        <div class="form-group">
                            <label for="message-contact">Message</label>
                            <input 
                                type="text" class="form-control" id="message-contact" 
                                value={values.message}
                                onChange={handleChange('message')}
                                required/>
                          </div>
                        <div className="text-center">
                                {values.error&&  <div className="text-danger">{values.error}</div> }

                                <button role='button' type='submit' class="btn btn-dark">
                                    {values.loading ? <div class="spinner-border text-light" role="status"></div>
                                    :
                                    "drop a message"
                                }
                            </button>
                        </div>
                      </form>
                        <div class="space-50"></div>
                        <div id="messagebox" class="col col-12"></div>
                      
                </div>
            </div>
            <div class="space-20"></div>
            <div class="alert alert-warning" >
                Division of Safety and Fire Engineering, School of Engineering, Cochin University of Science And Technology,Thrikkakara, Kalamassery, Kerala 
            </div>
            <div class="alert alert-warning text-center h4 " >
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/1957625971151084/"><i class="fab fa-facebook-square"></i> </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/asfe.cusat/"><i class="fab fa-instagram"></i></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" rel="noreferrer" href="https://twitter.com/AsfeCusat?s=09"><i class="fab fa-twitter"></i></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" rel="noreferrer" href=" https://www.linkedin.com/company/asfe-cusat"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="row">
               
            </div>
        </div>
    </section>
    <section class="bg-white">
        <div class="space-50"></div>
        <div class="space-50 bg-dark"></div>
    </section>
            
        </>
    )
}
