import express from "express";
import { config } from "dotenv";
import jsonParser from "../middlewares/jsonParser.js";
import corsConfig from "../middlewares/cors.js";
import serviceHubAi from "../routes/serviceHubAi.js"

const app = express();
app.use(express.json());
config();
const port = process.env.PORT || 5000;
app.use(corsConfig)
app.use(jsonParser)
app.get("/", (req, res) => {
    res.send({
        message: "Project NEXTGEN Server",
        health: "ok",
    });
});
app.use("/api/ServiceHubAI", serviceHubAi);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});