import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

//images
import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'

//costom css
import './banner.css'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={img2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={img3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;