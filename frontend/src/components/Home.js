import React from "react";

function Home() {
    return (
        <div className="container">
            <h2>SPECTAC</h2>
            <h5>Rekrytering och Bemanning</h5><br/><br/>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Recruitment</h5>
                            <p className="card-text"></p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Staffing</h5>
                            <p className="card-text"></p>

                        </div>
                    </div>
                </div>
            </div><br/>
            <a href="/jobs" className="btn btn-primary">View Jobs</a>
        </div>

    );
}

export default Home;