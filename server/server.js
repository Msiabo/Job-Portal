import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDb from "./config/db.js";
import * as Sentry from "@sentry/node";  // ✅ Import Sentry properly
import { clerkWebhooks } from "./controllers/webhooks.js";
  // ✅ Ensure tracing is included

// ✅ Initialize Express first
const app = express();



// ✅ Connect to MongoDB (before middlewares)
await connectToDb();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
app.get("/", (req, res) => res.send("API Working"));

app.post('/Webhooks' , clerkWebhooks)

app.get("/debug-sentry" , function mainHandler(req, res){
    throw new Error("First sentry error!!");
} );

Sentry.setupExpressErrorHandler(app);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT ${PORT}`);
});
