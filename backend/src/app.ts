import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { z } from 'zod';

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const bookingSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    date: z.string(),
    time: z.string().min(1, { message: "Time is required" }),
    guests: z.number().min(1, { message: "At least one guest is required" }).max(8, { message: "Maximum of 8 guests allowed" }),
  });



app.post('/reserve', async (req, res) => {
    const validatedData = bookingSchema.parse(req.body);
  try {
    const booking = await prisma.booking.create({
      data: validatedData,
    });
    res.json(booking);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json(error.flatten());
    } else {
      console.error(error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
