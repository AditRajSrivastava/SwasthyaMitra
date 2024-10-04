const PlaceHolder = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src="doctor.png" className="card-img-top" alt="Doctor" />
                <div className="card-body">
                    <h5 className="card-title">Doctor</h5>
                    <a href="#" className="btn btn-primary">Sign In</a>
                </div>
            </div>

            <div className="card">
                <img src="staff.png" className="card-img-top" alt="Medical Staff" />
                <div className="card-body">
                    <h5 className="card-title">Medical Staff</h5>
                    <a href="#" className="btn btn-primary">Sign In</a>
                </div>
            </div>
        </div>
    );
}

export default PlaceHolder;
