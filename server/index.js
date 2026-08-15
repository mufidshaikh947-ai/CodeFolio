require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const { UPLOADS_DIR } = require("./config/paths");
const app = express();
app.disable("x-powered-by");

// Middleware
// Reads BOTH CLIENT_URL (local dev) and CLIENT_URL_PRODUCTION (deployed
// Vercel URL) so the deployed frontend isn't blocked by CORS. Each var
// can also be a comma-separated list. Missing/empty vars are ignored
// instead of crashing the server on startup.
const allowedOrigins = [
    process.env.CLIENT_URL,
    process.env.CLIENT_URL_PRODUCTION
]
    .filter(Boolean)
    .flatMap((url) => url.split(","))
    .map((url) => url.trim());

app.use(
    cors({
        origin(origin, callback) {

            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(
                new Error("Not allowed by CORS")
            );

        },

        credentials: true
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    "/uploads",
    express.static(UPLOADS_DIR)
);

const PORT = process.env.PORT;

async function startServer() {

    await connectDB();


    app.listen(PORT, () => {

        console.log(`Server is running on port ${PORT}`);

    });

}

startServer().catch((error) => {

    console.error("Server failed to start.");

    console.error(error);

    process.exit(1);

});

app.get("/health", (req, res) => {

    res.status(200).json({

        success: true,

        message: "Server is running."

    });

});

const routes = require("./routes");

app.use("/", routes);