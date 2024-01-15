import Banner from "../../Component/Home/Banner";
import OnlineOrderItem from "../../Component/Home/OnlineOrderItem";


const Home = () => {
    return (
        <div>
            {/* banner  */}
            <Banner></Banner>
            {/* online order section */}
            <OnlineOrderItem></OnlineOrderItem>
        </div>
    );
};

export default Home;