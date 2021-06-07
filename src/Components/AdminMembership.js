import React, { useState } from 'react';
import firebase from './Firebase';
import {logo} from './_logo_img'

import jsPDF from 'jspdf'


export default function Adminmembership(props) {

    const [members, setMembers] = useState([]);
    const [loading,setLoading] = useState(false)
    // const [limit,setLimit] = useState(10)

    const fetchData = async () => {
        setLoading(true)
        const db = firebase.firestore();
        const data = await db.collection('membership').orderBy("date", 'desc').get();

        console.log("data : ", data.docs);
        setMembers(data.docs.map(doc=> ({...doc.data(),id: doc.id})));
        setLoading(false)

    };

    const deleteData = async(id)=>{
      const db = firebase.firestore();
      const data = await db.collection('membership').doc(id).delete()
      console.log(data)
      fetchData()
  }
    

    

    return (
        <>
        <div className="container">
            <div className="space-50"></div>
                <div className="h4 text-center">Membership</div> 
                <div className="text-center">
                    <div 
                    onClick={()=>(fetchData())}
                    className="btn btn-success">
                      {
                        loading?
                          <div class="spinner-border text-light" role="status"></div>
                          :
                          "Fetch Member Data"
                      }
                        
                    </div>
                </div>
                {/* <div className="text-center">
                  No of records to fetch
                  <input type="number" value={limit} onChange={(e)=>{setLimit(e.target.value?parseInt(e.target.value):'')}} />
                </div> */}
            <div className="space-50"></div>
            <div className="p-1">
                {
                    members.map(item=>{
                        return(
                            <div key={item.id} className="row shadow m-2 p-2">
                                <div className="col col-6">
                                    <div className="font-weight-bold">
                                        {item.name} {item.surname}
                                    </div>
                                    <div className="">
                                    { item.phone} <br />
                                    { item.email}
                                    </div> 
                                    <div className="">
                                        <div onClick={()=>CreatePdf(item)} className="btn btn-success">
                                            download
                                        </div>
                                        <div onClick={()=>{if(window.confirm("Are you sure you want to delete ")){deleteData(item.id)}}} className="btn btn-danger">
                                            delete
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col col-6 text-right">
                                    <img style={{height:'100px'}} src={item.image} className='img-fluid' alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
            
        </>
    )
}


const CreatePdf = ({name,surname,date_of_birth,nationality,address_c,pincode_c,state_c,address_p,pincode_p,state_p,email,phone,degree,year_of_joining,year_of_passing,college,position,date_of_holding,place_of_posting,company_address,payment_info,date_payment,payment_bank,image,date})=>{

  
  let date_ = new Date(date)
  let date_string = `${date_.getDate()}/${date_.getMonth()}/${date_.getFullYear()}`

  var doc = new jsPDF()

  doc.addImage(image,'jpeg', 150, 52, 35, 35);
  doc.addImage(logo,'jpeg', 13, 15, 15, 15);
  
  doc.setFontSize(16)
  doc.text(52, 20, 'Association of Safety and Fire Engineers')
  doc.text(100, 28, '(ASFE)')
  doc.setFontSize(12)
  doc.text(39, 35, 'Division of Safety & Fire Engineering, School of Engineering, CUSAT,')
  doc.text(80, 40, 'Kalamassery, Kochin - 22')
  doc.setFontSize(16)
  doc.text(70, 60, 'Application for Membership')
  doc.setFontSize(14)
  doc.text(17, 73, '1. Personal Information:')
  // doc.addImage(img, 'jpeg', 0, 0, 100, 50);
  doc.setFontSize(12)
  doc.text(17, 95, 'First Name:')
  doc.text(40, 95, name)
  doc.text(105, 95, 'Last Name:')
  doc.text(130, 95, surname)

  doc.text(17, 105, 'Date of Birth:')
  doc.text(45, 105, date_of_birth)
  doc.text(105, 105, 'Nationality:')
  doc.text(130, 105, nationality)

  doc.text(17, 115, 'Address For Correspondence:')
  doc.text(105, 115, 'Permanent Address:')

  // addres correspondance
  var newAddress = doc.splitTextToSize(address_c,60);
  var top = 121;
    for(var i=0;i<newAddress.length;i++)
    {
      top = top + 5;
      doc.text(17,top, newAddress[i]) 
    }

  
  doc.text(17, 155, 'Pin Code:')
  doc.text(40, 155, pincode_c)
  doc.text(17, 165, 'State:')
  doc.text(30, 165, state_c)

  doc.text(105, 155, 'Pin Code:')
  doc.text(130, 155, pincode_p)
  doc.text(105, 165, 'State:')
  doc.text(120, 165, state_p)


  // permanent address


  var newAddress_p = doc.splitTextToSize(address_p,60);
  top = 121;
    for(var i=0;i<newAddress_p.length;i++)
    {
      top = top + 5;
      doc.text(105,top, newAddress_p[i]) 
    }

 

  // phone and email
  doc.text(17, 175, 'Email:')
  doc.text(32, 175, email)
  doc.text(17, 185, 'Mobile:')
  doc.text(35, 185, phone)

  doc.setFontSize(14)
  doc.text(17, 206, '2. Educational Qualification:')  
  doc.setFontSize(12)

  
  
  doc.text(17, 217, 'Name of the Degree')  
  doc.text(17, 235, degree)  
  doc.text(70, 217, 'Year of joining')   
  doc.text(70, 235, year_of_joining)   
  doc.text(120, 217, 'Year of Passing')  
  doc.text(120, 235, year_of_passing)  
  doc.text(165, 217, 'College/University')  

  var newCollege = doc.splitTextToSize(college,50);
  top = 235;
    for(var i=0;i<newCollege.length;i++)
    {
      doc.text(157,top, newCollege[i]) 
      top = top + 5;
    }



  doc.line(15, 211, 15, 270) // vertical line
  doc.line(60, 211, 60, 270) // vertical line
  doc.line(105, 211, 105, 270) // vertical line
  doc.line(155, 211, 155, 270) // vertical line
  doc.line(205, 211, 205, 270) // vertical line

  doc.line(15, 211, 205, 211) // horizontal line
  doc.line(15, 230, 205, 230) // horizontal line
  doc.line(15, 270, 205, 270) // horizontal line

  doc.setFontSize(14)
  doc.text(17, 280, '3. Present Position:')  
  doc.setFontSize(12)

  doc.addPage()


  doc.text(17, 17, 'Present Designation')  

  var newPosition = doc.splitTextToSize(position,40);
  top = 33;
    for(var i=0;i<newPosition.length;i++)
    {
      doc.text(17,top, newPosition[i]) 
      top = top + 5;
    }


  doc.text(67, 17, 'Date of holding ')    
  doc.text(67, 25, 'the Position ') 
  doc.text(67, 33, date_of_holding)    
  doc.text(120, 17, 'Place of Posting')  
  var newPlace = doc.splitTextToSize(place_of_posting,40);
  top = 33;
    for(var i=0;i<newPlace.length;i++)
    {
      doc.text(118,top, newPlace[i]) 
      top = top + 5;
    }

  doc.text(160, 17, 'Name & Address of')  
  doc.text(160, 25, ' the Present Employer')  

  var newEmp = doc.splitTextToSize(company_address,45);
  top = 33;
    for(var i=0;i<newEmp.length;i++)
    {
      doc.text(161,top, newEmp[i]) 
      top = top + 5;
    }

  doc.line(15, 12,205,12) // horizontal line
  doc.line(15, 26,205,26) // horizontal line
  doc.line(15, 60,205,60) // horizontal line


  doc.line(15, 12, 15, 60) // vertical line
  doc.line(60, 12, 60, 60) // vertical line
  doc.line(110, 12, 110, 60) // vertical line
  doc.line(160, 12, 160, 60) // vertical line
  doc.line(205, 12, 205, 60) // vertical line

  

  doc.text(17, 115, '5. Declaration: ') 

  doc.setFontSize(10)

  var declare = []
  declare[0] = "1. I hereby apply for election as Life Member of the Association of Safety and Fire Engineers (ASFE) in accordance with the Bye-Laws as they now stand or as they may be legally altered hereafter."
  declare[1] = "2. I also do hereby undertake that in the event of my election as an Life Member, I will be governed by the Bye-Laws and the Regulations of the Association as they now are or they may hereafter be legally altered and that I will accept as final and binding the decisions of the Board of Directors."
  declare[2] = "3. I further undertake that I will promote the objectives of the Association, as far as available"
  declare[3] = "4. I accept the responsibility for the accuracy of the particulars contained in the Application Form with regard to my qualifications and experience and agree that if I am elected, the validity of my election shall depend upon the accuracy of such particulars as required in the Bye-Laws."
  declare[4] = "5. I also undertake to abide by Professional Conduct rules and/or Code of Ethics that the association may frame from time to time."

  
  var marginTop = 120
  var newLine = 0
  for(var j=0;j<5;j++)
  { 
    newLine = doc.splitTextToSize(declare[j],180);
    for(var i=0;i<newLine.length;i++)
    {
      marginTop = marginTop + 4;
      doc.text(17,marginTop, newLine[i]) 
    }
    marginTop = marginTop + 4;

  }

  doc.setFontSize(12)
  doc.text(170, 190, 'Yours Faithfully')  
  doc.text(17, 210, 'Date : ')  
  doc.text(30, 210, date_string)  
  doc.text(150, 210, 'Signature of the Applicant')  

//   doc.setLineWidth(1.3)
//   doc.line(0, 222, 210, 222)

  doc.addPage()

  doc.setFontSize(16)
  doc.text(85, 35, 'FOR OFFICE USE') 
  
  doc.setFontSize(14)
  doc.text(17, 70, '4. Payment Details')  
  doc.setFontSize(12)

  doc.text(17, 80, 'Cheque/Draft/Reference No:')  
  doc.text(75, 80, ".....................................................")  
  doc.text(17, 100, ' Date of payment: ')  
  // doc.text(35, 100, '..................')  
  doc.text(17, 90, ' Name of the Bank & Branch: ')  
  doc.text(75, 90, '.....................................................') 


  doc.setFontSize(12)
  doc.text(17, 140, '1) The credentials submitted by Shri.................................................are verified from the University.')  
  doc.text(17, 150, '2) Shri....................................................is elected as life member LM.........................of')  
  doc.text(20, 155, 'ASFE from DD/MM/YYYY.')  

  doc.text(85, 170, 'Approval (Office Stamp)')  



  doc.save(`ASFE_MEMBERSHIP_${name}.pdf`)


}