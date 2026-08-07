require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const seedDemoUsers = require("./utils/demoData");
const path = require("path");
const cors = require("cors");
const app = express();
app.disable("x-powered-by");

// Middleware
const allowedOrigins = process.env.CLIENT_URL.split(",");

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
    express.static(
        path.join(__dirname, "uploads")
    )
);

const PORT = process.env.PORT;

async function startServer() {

    await connectDB();

    await seedDemoUsers();

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

