import React, { useState } from 'react';

export const TermsandConidition = () => {

    const [values, setValues] = useState({
        terms: false,
    });

    return (
        <div className="card">
            <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" onClick={() => setValues({ terms: !values.terms })} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        TERMS AND CONDITIONS
            </button>
                </h2>
            </div>
            <div id="collapseTwo" className={`collapse ${values.terms === true && 'show'} `} aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                    DECLARATION <br /><br />
            1. I hereby apply for election as Life Member of the Association of Safety and Fire Engineers (ASFE) in accordance with the Bye-Laws as they now stand or as they may be legally altered hereafter.
        <br /><br /> 2. I also do hereby undertake that in the event of my election as an Life Member,
                I will be governed by the Bye-Laws and the Regulations of the Association as they now are or they may hereafter be legally altered
                and that I will accept as final and binding the decisions of the Board of Directors.
            <br /><br /> 3. I further undertake that I will promote the objectives of the Association, as far as available
            <br /><br /> 4. I accept the responsibility for the accuracy of the particulars contained in the Application Form with regard to my qualifications and experience and agree that if I am elected, the validity of my election
                shall depend upon the accuracy of such particulars as required in the Bye-Laws.
            <br /><br /> 5. I also undertake to abide by Professional Conduct rules and/or Code of Ethics that the association may
                frame from time to time.
        </div>
            </div>
        </div>
    );
};
