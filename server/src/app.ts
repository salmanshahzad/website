import express from "express";
import compression from "compression";
import { config } from "dotenv";
import { join } from "path";

config({ path: join(__dirname, "..", "..", ".env") });

const app = express();
app.use(compression());
app.use(express.static(join(__dirname, "..", "..", "client", "dist")));
app.use(express.static(join(__dirname, "..", "..", "client", "static")));

app.get("*", (req, res) => {
    res.redirect("/");
});

export default app;
