import React from "react";

function Home() {
    return (
        <div style={{minWidth:"100%"}}>


            <section className ="jumbotron " style ={{backgroundColor: "pink"}}>
                <h2>SPECTAC</h2>

                <h5>Rekrytering och Bemanning</h5><br/>

                Spectac Rekrytering Och Bemanning is a provider of innovative consulting services for your manpower needs.

            </section>
            <section className="container-fluid p-3 my-3 bg-dark " style ={{color: "pink"}}>
               <h1>Services</h1>
                <p>Our recruitment & staffing services are diversified with strengths in technology, design, financial services, life sciences, education, arts, fashion, manufacturing, food services, and tourism.</p>
            </section>

            <div className="row ">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Recruitment</h5>
                            <p className="card-text">We help you in the process of identifying, attracting, interviewing, selecting, hiring and onboarding employees.</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Staffing</h5>
                            <p className="card-text">We help you in the process of finding, selecting evaluating and developing a working relationship with current or future employees.</p>

                        </div>
                    </div>
                </div>
            </div><br/>



        </div>

    );
}

export default Home;