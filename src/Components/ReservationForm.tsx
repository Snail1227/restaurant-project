import { useState } from "react";
import { Request } from "./api";
import toast from "react-hot-toast";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


interface ReservationFormProps {
    isVisible: boolean;
    toggleVisibility: () => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({ isVisible, toggleVisibility }) => {
    const [datePicker, setDatePicker] = useState<Date | null>(null);
    const [registrarName, setRegistrarName] = useState<string>("");
    const [time, setTime] = useState<Date | null>(null);
    const [guests, setGuests] = useState<number>(0);




    const handleReset = () => {
        setRegistrarName("");
        setTime(null);
        setGuests(0);
        setDatePicker(null);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dateISO = datePicker ? datePicker.toISOString() : null;
        const timeISO = time ? time.toISOString() : null;
        console.log(dateISO)
        Request.createReservation({
            registrarName: registrarName,
            datePicker: dateISO,
            time: timeISO,
            guests: guests,
        }).then(() => {
            toast.success("Reservation created successfully")
            handleReset();
        }).catch(error => {
            toast.error(error);
            console.error("Failed to create reservation:", error);
        });
    }

    return (
        <div className={`reservation-form-background ${isVisible ? 'reservation-form-visible' : ''}`}>
            <button onClick={toggleVisibility} className="toggle-header">✕</button>
            <form onSubmit={handleFormSubmit} className="reservation-form-inputs">
                <h2>Reservations</h2>
                <div className="reserve-input">
                    <p>Registrar Name</p>
                    <input type="text" value={registrarName} onChange={(e) => setRegistrarName(e.target.value)} />
                </div>
                <div className="reserve-input">
                    <p>Date</p>
                    <DatePicker
                        selected={datePicker}
                        onChange={(date: Date) => setDatePicker(date)}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="reserve-input">
                    <p>Time</p>
                    <DatePicker
                        selected={time}
                        onChange={(date) => setTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                </div>
                <div className="reserve-input">
                    <p>Number of People</p>
                    <input type="number" value={guests.toString()} onChange={(e) => setGuests(parseInt(e.target.value, 10))}/>
                </div>
                <button type="submit" className="home-btn btn-brant">Find a Table</button>
            </form>
            <div></div>
            <div></div>
        </div>
    )
}