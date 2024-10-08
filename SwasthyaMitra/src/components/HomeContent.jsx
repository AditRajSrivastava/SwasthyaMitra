import Text from "./Text";
import PlaceHolder from "./PlaceHolder";

const HomeContent = () => {
    return (
        <div style={{ display: "flex" }}>
            <div className="home-content">
                <Text />
            </div>
            <PlaceHolder />
        </div>
    );
};

export default HomeContent;
