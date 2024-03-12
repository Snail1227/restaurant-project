import { ImagesEffect } from "./ImagesEffect"
import food15 from "../images/food15.jpeg";
import food11 from "../images/food11.jpeg";
import food8 from "../images/food8.jpg";

const images: string[] = [
    food15,
    food11 ,
    food8,
];


export const Location: React.FC = () => {
    return (
        <div>
            <ImagesEffect images={images} />
            <div className="location-about">
                <div className="location-col-1">
                    <h1>Hours & Location</h1>
                    <div className="location-col-info">
                        <div className="location-address">
                            <a href="#">541 Hudson St,</a>
                            <a href="#"> New York, NY 10014</a>
                        </div>
                        <a href="#">info@vistamare.com</a>
                    </div>
                    <div>
                        <p>Seven Days a Week</p>
                        <p>Monday - Wednesday, Noon - 10 PM   </p>
                        <p>Thursday & Friday, Noon - 11 PM   </p>
                    </div>
                    <div>
                        <p>Saturday, 11 AM - 11 PM</p>
                        <p>Sunday, 11 AM - 10 PM</p>
                    </div>
                </div>

                <div>
                    <p>Equal parts restaurant, wine bar, café, and later-evening haunt, Anton's sits on a charming block in a landmarked 1850s Greek-revival style building at 541 Hudson Street (corner of West 11th). Guests can choose to while away in our cozy café, tuck in to the spirited bar, or settle in to on our sidewalk patio when the weather allows. We're a neighborhood restaurant at our core, and we always reserve room for walk-in guests.</p>
                    <p>Our Hours</p>
                    <p>Monday - Wednesday, Noon - 10 PM</p>
                    <p>Thursday & Friday, Noon - 11 PM</p>
                    <p>Saturday, 11 AM - 11 PM</p>
                    <p>Sunday, 11 AM - 10 PM</p>
                    <p>We're happy to continue to offer take away and delivery (via Caviar) so guests can enjoy our food and drink in the comfort of home. </p>
                </div>
            </div>
        </div>
    )
}