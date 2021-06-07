import React,{useState} from 'react';
import firebase from './Firebase'
import { TermsandConidition } from './TermsandConidition';


export const MemberShipForm = () => {

    const [values, setValues] = useState({
        name :'',
        surname:'',
        date_of_birth:'',
        nationality:'',
        address_c:'',
        pincode_c:'',
        state_c:'',
        address_p:'',
        pincode_p:'',
        state_p:'',
        phone :'',
        email :'',
        degree:'',
        year_of_joining:'',
        year_of_passing:'',
        college:'SOE, CUSAT',
        position:'',
        date_of_holding:'',
        place_of_posting:'',
        company_address:'',
        payment_info:'',
        date_payment:'',
        payment_bank:'',

        image: '',
        error: false,
        loading: false
    });


    const handleChange = name => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const _handleReaderLoaded = (readerEvent) => {
        console.log("loader called");
        let binaryString = readerEvent.target.result;
        // console.log(binaryString)
        setValues({
            ...values,
            image: btoa(binaryString)
        });

    };

    const handleFile = (e) => {
        let file = e.target.files[0];
        let size = Math.floor(e.target.files[0].size/1024) 
        console.log("file called",size);
        if(size >= 1000){
            console.log("called")
            alert("file should be less than 1Mb")
            e.target.value = ''
        }
        else{
            if (file) {
                const reader = new FileReader();
                reader.onload = _handleReaderLoaded;
                reader.readAsBinaryString(file);
    
            }
        }

       

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");

        setValues({ ...values, loading: true });
        const db = firebase.firestore();
        db.collection('membership').add({
            ...values,
            image: `data:image/jpeg;base64,${values.image}`,
            date: Date.now(),
        }).then((res => {
            console.log(res);
            setValues({

                name :'',
                surname:'',
                date_of_birth:'',
                nationality:'',
                address_c:'',
                pincode_c:'',
                state_c:'',
                address_p:'',
                pincode_p:'',
                state_p:'',
                phone :'',
                email :'',
                degree:'',
                year_of_joining:'',
                year_of_passing:'',
                college:'SOE, CUSAT',
                position:'',
                date_of_holding:'',
                place_of_posting:'',
                company_address:'',
                payment_info:'',
                date_payment:'',
                payment_bank:'',

                image: values.image,

                error: 'Data sent successfully',
                loading: false,
               
            });
            window.alert("Registration details uploaded successfully")

        }))
            .catch(err => {
                console.log(err);
                setValues({
                    ...values,
                    loading: false,
                    error: 'Something went wrong'
                });
            });

    };

    return (
        <form onSubmit={handleSubmit} id="form1">
            <div className="form-group">
                <label for="name">First name</label>
                <input 
                    value={values.name}
                    onChange={handleChange('name')}
                    type="text" className="form-control" id="name" required />
            </div>
            <div className="form-group">
                <label for="name">Sur name</label>
                <input 
                    value={values.surname}
                    onChange={handleChange('surname')}
                    type="text" className="form-control" id="surname" />
            </div>
            <div className="form-group">
                <label for="DOB">Date of Birth</label>
                <input 
                    value={values.date_of_birth}
                    onChange={handleChange('date_of_birth')}
                    type="text" className="form-control" id="DOB" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}" placeholder="01-05-1995 (DD-MM-YYYY)" required />
            </div>
            <div className="form-group">
                <label for="nationality">Nationality</label>
                <input 
                    value={values.nationality}
                    onChange={handleChange('nationality')}
                    type="text" className="form-control" id="nationality" required />
            </div>
            <div className="form-group">
                <label for="address_c">Address for correspondence</label>
                <input 
                    value={values.address_c}
                    onChange={handleChange('address_c')}
                    type="text" className="form-control" id="address_c" required />
            </div>
            <div className="form-group">
                <label for="pincode_c">Pin code</label>
                <input 
                    value={values.pincode_c}
                    onChange={handleChange('pincode_c')}
                    type="text" className="form-control" id="pincode_c" required />
            </div>
            <div className="form-group">
                <label for="state_c">State</label>
                <input 
                    value={values.state_c}
                    onChange={handleChange('state_c')}
                    type="text" className="form-control" id="state_c" required />
            </div>

            <div className=" alert-dark">
                <div className="form-group">
                    <label for="address_p">Permanent address</label>
                    <input 
                        value={values.address_p}
                        onChange={handleChange('address_p')}
                        type="text" className="form-control" id="address_p" required />
                </div>
                <div className="form-group">
                    <label for="pincode_p">Pin code</label>
                    <input 
                        value={values.pincode_p}
                        onChange={handleChange('pincode_p')}
                        type="text" className="form-control" id="pincode_p" required />
                </div>
                <div className="form-group">
                    <label for="state_p">State</label>
                    <input 
                        value={values.state_p}
                        onChange={handleChange('state_p')}
                        type="text" className="form-control" id="state_p" required />
                </div>

            </div>


            <div className="form-group">
                <label for="email">Email address</label>
                <input 
                    value={values.email}
                    onChange={handleChange('email')}
                    type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
            </div>
            <div className="form-group">
                <label for="phone">phone</label>
                <input 
                    value={values.phone}
                    onChange={handleChange('phone')}
                    type="text" className="form-control" id="phone"  placeholder="eg: 8976875476" required />
            </div>
            <div className="space-50"></div>
            <div className="h5">
                Educational Qualification <br /><br />
            </div>
            <div className="">
                <div className="form-group">
                    <label for="degree">Name of Degree</label>
                    <input 
                        value={values.degree}
                        onChange={handleChange('degree')}
                        type="text" className="form-control" id="degree" placeholder="BTech/MTech/PhD" required />
                </div>
                <div className="form-group">
                    <label for="yoj">Year of joining</label>
                    <input 
                        value={values.year_of_joining}
                        onChange={handleChange('year_of_joining')}
                        type="text" className="form-control" id="yoj" pattern="[0-9]{4}" placeholder="e.g. 2017 (YYYY)" required />
                </div>
                <div className="form-group">
                    <label for="yop">Year of Passing</label>
                    <input 
                        value={values.year_of_passing}
                        onChange={handleChange('year_of_passing')}
                        type="text" className="form-control" id="yop" pattern="[0-9]{4}" placeholder="e.g. 2021  (YYYY)" required />
                </div>
                <div className="form-group">
                    <label for="college">College/University</label>
                    <input 
                         value={values.college}
                        //  onChange={handleChange('college')}
                        type="text" className="form-control" id="college" disabled required />
                </div>
            </div>
            <div className="space-50"></div>
            <div className="h5">
                Present Position<br /><br />
            </div>
            <div className="">
                <div className="form-group">
                    <label for="position">Present Designation</label>
                    <input 
                         value={values.position}
                         onChange={handleChange('position')}
                        type="text" className="form-control" id="position" />
                </div>
                <div className="form-group">
                    <label for="doh">Date of holding the Position</label>
                    <input 
                         value={values.date_of_holding}
                         onChange={handleChange('date_of_holding')}
                        type="text" className="form-control" id="doh" pattern="[0-9]{4}" placeholder="e.g. 2014 (YYYY)" />
                </div>
                <div className="form-group">
                    <label for="place_of_posting">Place of Posting</label>
                    <input 
                         value={values.place_of_posting}
                         onChange={handleChange('place_of_posting')}
                        type="text" className="form-control" id="place_of_posting" />
                </div>
                <div className="form-group">
                    <label for="company_address">Name & Address of the Present Employer</label>
                    <input 
                         value={values.company_address}
                         onChange={handleChange('company_address')}
                        type="text" className="form-control" id="company_address" />
                </div>
            </div>
            <div className="space-50"></div>
            <div className="h5">
                Upload Photo
            </div>
            <div className="">
                <div className="form-group">
                    <label for="passportPhoto">Upload Image (.jpeg/jpg)</label>
                    <input 
                        onChange={handleFile}
                        id="passportPhoto" 
                        accept=".jpg, .jpeg" 
                        type="file" 
                        name="myfile" required />
                </div>
                
                <div className="alert-info">
                    file size should be less than 1Mb .
                </div>
            </div>

            <div className="space-50"></div>
            {/* <div className="h5">
                Payment Details<br /><br />
            </div>
            <div className="alert-warning">
                <div className="form-group">
                    <label for="payment_info">Cheque/Draft/Reference no</label>
                    <input 
                         value={values.payment_info}
                         onChange={handleChange('payment_info')}
                        type="text" className="form-control" id="payment_info" required />
                </div>
                <div className="form-group">
                    <label for="date_payment">Date</label>
                    <input 
                         value={values.date_payment}
                         onChange={handleChange('date_payment')}
                        type="text" className="form-control" id="date_payment" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}" placeholder="01-05-1995 (DD-MM-YYYY)" required />
                </div>
                <div className="form-group">
                    <label for="payment_bank">Name of the Bank & Branch</label>
                    <input 
                         value={values.payment_bank}
                         onChange={handleChange('payment_bank')}
                        type="text" className="form-control" id="payment_bank" required />
                </div>
            </div> */}
            <TermsandConidition />
            <div className="space-20"></div>
            <div className="form-group text-center">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" required />
                <label className="form-check-label" for="defaultCheck1">
                    I acknowledge and hereby accept the terms and conditions.
                </label>

            </div>
            <div className="space-20"></div>
            <div className="row">
                <div id="message-1" className="col col-12"></div>
            </div>
            <div className="space-20"></div>
            <div className="text-center">
                    {values.error&&  <div className="text-danger">{values.error}</div> }

                    <button role='button' type='submit' class="btn btn-dark">
                        {values.loading ? <> <div class="spinner-border text-light" role="status"></div> &nbsp; uploading... </>
                        :
                        "Register"
                        }
                    </button>
            </div>
            <div className="space-20"></div>

        </form>
    );
};
