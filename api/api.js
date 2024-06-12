import express from "express";
import fs from "fs";
import cors from "cors";

const filePath = "./data/data.json";
function readData() {
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
};

const PORT = 5050;
const api = express();

api.use(express.json());
api.use(cors());

api.get("/", (req, res) => {
    const data = readData();

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
        return array;
    };
    const shuffledArray = shuffle(data);
    res.json(shuffledArray);
});

api.listen(PORT, () => {
    console.log(`Api listening on port: ${PORT}`)
});