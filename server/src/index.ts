import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import projectRouter from "./routes/projectRoutes";

const PORT = process.env.PORT || 5000;

// ROUTE IMPORTS

// CONFIGURATIONS
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/projects", projectRouter);

// LISTEN SERVER
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
