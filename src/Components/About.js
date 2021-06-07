import React,{ useState} from 'react'
import Fade from 'react-reveal/Fade'

export default function About(props) {
    
    const [values,setValues] = useState({
        oneExpand : true,
        twoExpand : false,
        threeExpand : false,
    })

    return (
        <>
        <section id="about" className="bg-white">
        <div className="about">
            <div className="row bg-warning">
                <div className="space-20"></div>
                <div className="col col-12 text-center h2 underline-yellow">
                    ABOUT
                </div>
                <div className="space-20"></div>
                <div className="col col-12"></div>
            </div>
            <div className="space-50"></div>
            <div className="container">
                <div className="accordion" id="accordionExample">
                  <Fade>
                    <div className="card">
                      <div className="card-header" id="headingOne"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="mb-0 pointer" onClick={()=>setValues({oneExpand: !values.oneExpand })}  >
                            <i className="fas fa-sort-down"></i> &nbsp;&nbsp;ASFE – Association of Safety and Fire Engineers
                        </div>
                      </div>
                  
                      <div id="collapseOne" className={`collapse ${values.oneExpand === true && 'show'}`} aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            In 1996, Cochin University of Science And Technology (CUSAT) started totally new stream of study, Safety & Fire Engineering, to fill the large void of professionals in the HSEF (Health, Safety, Environment and Fire) field. Towards the end of 20th Century a group of Safety & Fire engineering students from CUSAT gathered for brainstorming on creating a platform for them to communicate, unite and evolve together for a SAFER WORLD.  It was then, ASFE an alumni association of safety and fire protection professionals of CUSAT evolved.
                            <br/><br/>  Since then ASFE has been mediating as a platform to extract the expertise of the HSEF professionals from CUSAT working all over the world and bringing them together for a cause, ie. TOWARDS A SAFER WOLD. Sooner it became a common platform for Safety & Fire Engineering, Graduates & Postgraduates from School of Engineering, CUSAT to share their knowledge, ideas and expertise in the field and utilize it for the betterment of the society. The association also co-ordinates the alumni activities and provide career guidance to the students of Division of Safety & Fire Engineering, School of Engineering, CUSAT. 
                            <br/><br/> With a number of  diversified professionals working all around the world, ASFE  acts as a bridge between Division of Safety & Fire Engineering, Pioneering Research organizations, Major Industries (national& International) and Policy making bodies; to convert Dept. as a Centre of Excellence through guided research activities and developmental projects. As a commitment to the society, ASFE voluntarily organizes safety awareness programs among the common public through educational and training programs, technical bulletins, Tech Fests and skits. It is actively involved in organizing  Conferences, Symposiums and publishes Journals, periodicals in the related field.
                            
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header " id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="mb-0 pointer" onClick={()=>setValues({twoExpand: !values.twoExpand })} >
                            <i className="fas fa-sort-down"></i> &nbsp;&nbsp;Division Safety and Fire Engineering 
                        </div>
                      </div>
                      <div id="collapseTwo" className={`collapse ${values.twoExpand === true && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            The Division of Safety and Fire Engineering established in 1996, is the first of its kind in the country to start a B. Tech programme in Safety and Fire Engineering. The Division is actively involved in the areas of education, research and consultancy in the field of Safety, Fire and Environmental engineering. The Division offers, B.Tech in Safety and Fire Engineering, Master’s Degree in Industrial Safety (HSE Management) and Ph.D. programme in HSE fields. The division so far has awarded a number of Ph.Ds. Both the B. Tech (Safety and Fire Engineering) and M.Tech is accredited by the NBA and the course have been approved by BCSP. 

                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="mb-0 pointer" onClick={()=>setValues({threeExpand: !values.threeExpand })} >
                                <i className="fas fa-sort-down"></i> &nbsp;&nbsp;School of Engineering, CUSAT.
                            </div>
                      </div>
                      <div id="collapseThree" className={`collapse ${values.threeExpand === true && 'show'}`} aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            Cochin University of Science and Technology (CUSAT) occupies a unique place on the academic road map of Asia as a premier institution for higher education. The University’s motto ‘Tejasswinavadhitamasthu’ meaning ‘may the wisdom accrued deify us both - the teacher and the taught and percolate to the universe in its totality. CUSAT offers programmes across a spectrum of disciplines in frontier areas ranging from engineering, science and technology to humanities, law and
                            Management. The pursuit of excellence through these programmes has given CUSAT national and international acclaim.
                            School of Engineering is the largest academic unit of CUSAT having around 3000 students in UG, PG and Research Programmes. School of Engineering was established in 1979 for offering part-time M.Tech Programmes in Civil, Mechanical, Electrical and Chemical Engineering to help practicing engineers in and around Cochin. Research activities were started from 1981 with Ph.D. programme in Civil Engineering. Later the School introduced B.Tech programme in five major disciplines. The School functions through its Divisions: Civil, Mechanical, Electrical, Electronics, Computer Science, Safety & Fire, and Information Technology. School of Engineering has been well accepted as a Research Centre and a major Consultancy Centre. A number of research projects have been sanctioned to school by pioneering research agencies like DST, ISRO, AICTE, UGC, Coir Board, Coconut Development Board etc.
                        </div>
                      </div>
                    </div>
                  </Fade>
                  </div>

            </div>
            
            <div className="space-100"></div>
        </div>
    </section>
            
        </>
    )
}
