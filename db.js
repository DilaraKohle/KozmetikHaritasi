import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: "skingredient",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Veritabanina basariyla baglanildi!");
    }).catch((err) => {
        console.log(`veritabanina baglanilamadi. Error: ${err}`)
    });

};

export default conn;