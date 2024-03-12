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
    name: z.string(),
    date: z.string(),
    time: z.string(),
    guests: z.number(),
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
      return res.status(400).json({error: "Please fill out the form" });
    } else {
      res.status(500).json({ message: "server side error" });
    }
  }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
