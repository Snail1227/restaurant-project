import { ImagesEffect } from "./ImagesEffect"
import food2 from "../images/food2.jpeg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpeg";

const images: string[] = [
    food2,
    food5 ,
    food6,
];

export const Contact: React.FC = () => {
    return (
        <>
            <ImagesEffect images={images}/>
            <div className="contact-about">
                <h2>Contact</h2>
                <p>Vista Mare is a relaxed neighborhood café and wine bar in the heart of the West Village. We're open seven days a week until late, and we serve our full menu in the dining room and bar. We appreciate your inquiry, and someone from our team will respond shortly.</p>
                <p>541 Hudson St,New York, NY 10014</p>
                <div className="text-with-email">
                    <p>General Inquiries:</p>
                    <a href="mailto:info@vistamare.com">info@vistamare.com</a>
                </div>
                <div className="text-with-email">
                    <p>Join Our Team:</p>
                    <a href="mailto:teams@vistamare.com">teams@vistamare.com</a>
                </div>
                <div className="text-with-email">
                    <p>Media Inquiries: </p>
                    <a href="mailto:press@vistamare.com">press@vistamare.com</a>
                </div>
                <div className="text-with-email">
                    <p>Follow </p>
                    <a href="mailto:@vistamare.com">@vistamare.com</a>
                </div>
            </div>
        </>
    )
}