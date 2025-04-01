import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import apiRoutes from "./routes/apiRoutes.js";
import { connectDB } from "./config/database.js";
import seedUsers from "./config/seeds/seedUsers.js";
import seedCompanies from "./config/seeds/seedCompanies.js";
import seedPackages from "./config/seeds/seedPackages.js";
import seedPositions from "./config/seeds/seedPositions.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parses x-www-form-urlencoded
app.use("/api", apiRoutes);

app.get("/", (req, res) => { 
  res.status(200).json({message: "Hello World from baceknd" }); 
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => console.log("User disconnected"));
});

connectDB();
    await seedCompanies();
    await seedPackages();
    await seedPositions();
    await seedUsers();
    console.log("✅ All seeds executed successfully.");
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
