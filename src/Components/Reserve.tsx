import food10 from "../images/food10.jpeg";
import food3 from "../images/food3.jpg";
import food7 from "../images/food7.jpg";
import "../css/reserve.css"
import { useState } from "react";
import { ReservationForm } from "./ReservationForm";
import { ImagesEffect } from "./ImagesEffect";

const images: string[] = [
    food10,
    food3 ,
    food7,
];


export const Reserve: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };
    
    return (
        <div className="reserve-container">
            <ImagesEffect images={images} />

            <div className="reserve-about">
                <h2>Reserve</h2>
                <p>We accept reservations seven days a week, up to 14 days in advance, via Resy. </p>
                <div className="text-with-email">
                    <p>For parties of nine or more, please email </p>
                    <a href="mailto:feasts@vistamare.com">feasts@vistamare.com</a>
                </div>
                <p>Please note, reservations are not available for bar seats. Vista Mare is a neighborhood restaurant, and we always reserve a number of seats for walk-in guests in our dining room and at our bar. When the restaurant is full, we're happy to take a name and number and let you know when a table becomes available. </p>
                <button className="home-btn btn-brant" onClick={toggleFormVisibility}>Reservations</button>
            </div>
            {isFormVisible && <ReservationForm isVisible={isFormVisible} toggleVisibility={toggleFormVisibility}/>} 
        </div>
        
    )
}