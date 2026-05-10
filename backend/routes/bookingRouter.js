import express from "express";
import { checkAvailability, createBooking, getMyBookings, searchAvailable } from "../controllers/bookingController.js";
import { authUser } from "../middleware/authUser.js";

const bookingRouter = express.Router();

bookingRouter.post("/create-booking", authUser, createBooking);
bookingRouter.get("/get-bookings", authUser, getMyBookings);
bookingRouter.get("/check-availability", checkAvailability);
bookingRouter.get("/search-available", searchAvailable);

export default bookingRouter;
