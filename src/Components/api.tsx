export const baseUrl = "http://localhost:5000";

interface ReservationParams {
    registrarName: string;
    datePicker: string | null;
    time: string | null;
    guests: number;
  }

export const Request = {
    createReservation: async ({registrarName, datePicker, time, guests}: ReservationParams) => {
        return await fetch(`${baseUrl}/reserve`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: registrarName,
            date: datePicker,
            time,
            guests
          }),
        }).then(response => {
          if (!response.ok) {
            throw new Error("Failed to create user");
          }
          return response.json();
        })
      },
}