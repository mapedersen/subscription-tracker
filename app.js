import express from "express";

import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subsription.route.js";

const app = express();

// Api Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);


app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API");
});

app.listen(PORT, () => {
  console.log(`Subscription Tracker is running on http://localhost:${PORT}`);
});