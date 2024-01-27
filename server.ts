import express, {Request, Response} from "express";
import path from "path";

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "dist/app")))

app.get("/", (req: Request, res: Response) => {
    // res.sendFile(path.join(__dirname, "app", "index.html"))
    res.sendFile(path.join(__dirname, "src/app/index.html"));
    // Res.send("Hello World");
    // const pathName2 = path.join(__dirname, "/app", "/index.html");
    // res.sendFile(pathName2);
    // res.sendFile(__dirname + 'app/index.html');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
