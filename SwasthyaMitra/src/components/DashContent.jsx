import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicinePills } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";

const DashContent = () => {
    return (
        <div className="custom-bg">
            <div className="text">
                <h4>Take online!</h4>
                <h2 style={{ color: "#4285F4" }}>Doctor Consultation</h2>
                <h5>Connect instantly with a 24x7 specialist</h5>
                <button className="btn btn-primary" type="submit">Register Now</button>
            </div>
            <div className="panel-div">
                <div id="carouselExampleAutoplaying" className="carousel slide panel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '400px' }}>
                                <FaUserDoctor size={150} color="#4285F4" />
                                <button className="btn btn-primary mt-3" type="submit">Book Appointment</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '400px' }}>
                                <GiMedicinePills size={150} color="#4285F4" />
                                <button className="btn btn-primary mt-3" type="submit">Get Medicines</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '400px' }}>
                                <TbReportSearch size={150} color="#4285F4" />
                                <button className="btn btn-primary mt-3" type="submit">View Reports</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DashContent;
