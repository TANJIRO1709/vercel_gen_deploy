import express from "express";
import { config } from "dotenv";
import jsonParser from "../middlewares/jsonParser.js";
import corsConfig from "../middlewares/cors.js";
import serviceHubAi from "../routes/serviceHubAi.js";

const app = express();

// Load environment variables
config();

// Middleware
app.use(express.json());
app.use(corsConfig);
app.use(jsonParser);

// Define routes
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send({
        message: "Project NEXTGEN Server",
        health: "ok",
    });
});

// Route for ServiceHubAI
app.use("/api/ServiceHubAI", serviceHubAi);

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
