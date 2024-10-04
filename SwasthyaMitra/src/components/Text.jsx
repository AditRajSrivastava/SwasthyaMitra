import { FaUserNurse } from "react-icons/fa6";

const Text = () => {
    return <div className="card">
        <div className="card-header">
            <FaUserNurse size={50} color="#4285F4" />
            <h2>SwasthyaMitra <br />
                <h4>Trust family!</h4>
            </h2>

        </div>
        <div className="card-body card-content">
            <h5 className="card-title">Welcome to SwasthyaMitra!</h5>
            <p className="card-text">
                Your Trusted Partner in Health & Wellness. At SwasthyaMitra, we understand that good health is the foundation of a happy and fulfilling life. Our mission is to provide holistic healthcare solutions that are accessible, affordable, and personalized to your unique needs. Whether you’re looking to consult with a doctor, track your fitness progress, or receive nutritional advice, we are here to support you at every step of your wellness journey.
            </p>
            <img src="hospital.png" className="body-img" />
        </div>
    </div>
}
export default Text;