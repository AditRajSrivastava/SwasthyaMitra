import Navbar from "./Navbar";
import Footer from "./Footer";

const RegisterPatient = () => {
    return (
        <>
            <Navbar />
            <div className="form-head py-5 text-center">
                <h2>Patient Registration</h2>
                <p>
                    Below is the form to register a patient, built with custom design elements.
                    Please fill in all required fields before submitting the form.
                </p>
            </div>

            <div className="panel-div">
                <div className="form">
                    <div className="home-content">
                        <h1>Register Patient</h1>
                        <p>
                            Fill out the details below to register the patient. The form includes validation
                            and will notify you of any missing or incorrect information.
                        </p>
                    </div>

                    <form className="needs-validation">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" required />
                                <div className="invalid-feedback">Valid first name is required.</div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" required />
                                <div className="invalid-feedback">Valid last name is required.</div>
                            </div>

                            {/* Gender Field */}
                            <div className="col-12">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select className="form-select" id="gender" required>
                                    <option value="">Choose...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="invalid-feedback">Please select a valid gender.</div>
                            </div>

                            {/* Blood Group Field */}
                            <div className="col-12">
                                <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                                <select className="form-select" id="bloodGroup" required>
                                    <option value="">Choose...</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                                <div className="invalid-feedback">Please select a valid blood group.</div>
                            </div>

                            {/* Aadhaar Number Field */}
                            <div className="col-12">
                                <label htmlFor="aadhaar" className="form-label">Aadhaar Number</label>
                                <input type="text" className="form-control" id="aadhaar" required />
                                <div className="invalid-feedback">Aadhaar number is required.</div>
                            </div>

                            {/* Mobile Number Field */}
                            <div className="col-12">
                                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                <input type="tel" className="form-control" id="mobile" required />
                                <div className="invalid-feedback">Valid mobile number is required.</div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                <div className="invalid-feedback">Please enter a valid email address.</div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                <div className="invalid-feedback">Please enter your address.</div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">Please select a valid country.</div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">Please provide a valid state.</div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="zip" required />
                                <div className="invalid-feedback">Zip code required.</div>
                            </div>
                        </div>

                        <hr className="my-4" />
                        <button className="w-100 btn btn-primary btn-lg" type="submit">
                            Register Patient
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default RegisterPatient;
