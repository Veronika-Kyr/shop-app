import { createServer } from "miragejs";
import plant1 from "../src/assets/images/plant1.jpg"
import plant3 from "../src/assets/images/plant3.jpg"
import plant4 from "../src/assets/images/plant4.jpg"
import plant5 from "../src/assets/images/plant5.jpg"
import plant6 from "../src/assets/images/plant6.jpg"
import plant7 from "../src/assets/images/plant7.jpg"
import plant8 from "../src/assets/images/plant8.jpg"
import plant9 from "../src/assets/images/plant9.jpg"
import plant10 from "../src/assets/images/plant10.jpg"
import plant11 from "../src/assets/images/plant11.jpg"
import plant12 from "../src/assets/images/plant12.jpg"
import plant13 from "../src/assets/images/plant13.jpg"
import plant15 from "../src/assets/images/plant15.jpg"
import plant16 from "../src/assets/images/plant16.jpg"
import plant17 from "../src/assets/images/plant17.jpg"
import plant18 from "../src/assets/images/plant18.jpg"
import plant19 from "../src/assets/images/plant19.jpg"
import plant20 from "../src/assets/images/plant20.jpg"
import plant21 from "../src/assets/images/plant21.jpg"
import plant22 from "../src/assets/images/plant22.jpg"
import plant23 from "../src/assets/images/plant23.jpg"
import plant24 from "../src/assets/images/plant24.jpg"
import plant25 from "../src/assets/images/plant25.jpg"
import plant26 from "../src/assets/images/plant26.jpg"
import plant27 from "../src/assets/images/plant27.jpg"
import plant28 from "../src/assets/images/plant28.jpg"


let feedbackContainer = [
    {
        "id": "25",
        "feedback": "The best plant shop ever!",
        "fullName": "Olena Komar"
    },
    {
        "id": "6VLr6wQ",
        "fullName": "Anna Grey",
        "feedback": "My next plant definitely will be bought here!"
    }
];

export default function server() {

    createServer({
        routes() {
            this.get("/feedbacks", () => ({

                feedbacks: feedbackContainer,
            }
            ), { timing: 1000 }
            )

            this.post("/feedbacks", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                attrs.id = Math.floor(Math.random() * 100);

                return { feedb: attrs }
            })


            this.get("/plants", () => (
                [
                    {
                        "id": "1",
                        "photo": `${plant16}`,
                        "plantName": "Orchid",
                        "sorttName": "Black Pearl",
                        "size": "10",
                        "age": "2",
                        "features": "mini/midi dark purple petals",
                        "price": "300"
                    },
                    {
                        "id": "2",
                        "photo": `${plant10}`,
                        "plantName": "Orchid",
                        "sorttName": "Golden Beauty",
                        "size": "10",
                        "age": "2",
                        "features": "max yellow with purple petals",
                        "price": "250"
                    },
                    {
                        "id": "3",
                        "photo": `${plant7}`,
                        "plantName": "Orchid",
                        "sorttName": "Golden Queen",
                        "size": "30",
                        "age": "2",
                        "features": "max yellow petals",
                        "price": "280"
                    },
                    {
                        "id": "4",
                        "photo": `${plant6}`,
                        "plantName": "Orchid",
                        "sorttName": "Las Vegas",
                        "size": "10",
                        "age": "1",
                        "features": "max yellow with brown petals",
                        "price": "350"
                    },
                    {
                        "id": "5",
                        "photo": `${plant13}`,
                        "plantName": "Orchid",
                        "sorttName": "Yellow splash",
                        "size": "20",
                        "age": "1",
                        "features": "max yellow petals",
                        "price": "300"
                    },
                    {
                        "id": "6",
                        "photo": `${plant19}`,
                        "plantName": "Orchid",
                        "sorttName": "Liodoro",
                        "size": "15",
                        "age": "2",
                        "features": "midi yellow with red petals, smells",
                        "price": "360"
                    },
                    {
                        "id": "7",
                        "photo": `${plant20}`,
                        "plantName": "Orchid",
                        "sorttName": "Biondoro",
                        "size": "10",
                        "age": "2",
                        "features": "midi yellow petals",
                        "price": "320"
                    },
                    {
                        "id": "8",
                        "photo": `${plant11}`,
                        "plantName": "Dracena",
                        "sorttName": "GFHGHG",
                        "size": "60",
                        "age": "2",
                        "features": "green and white and rose leaves",
                        "price": "200"
                    },
                    {
                        "id": "9",
                        "photo": `${plant17}`,
                        "plantName": "Dracena",
                        "sorttName": "fdgfggfhg",
                        "size": "45",
                        "age": "2",
                        "features": "green and purple leaves",
                        "price": "180"
                    },
                    {
                        "id": "10",
                        "photo": `${plant5}`,
                        "plantName": "Cordilina",
                        "sorttName": "fhggjh",
                        "size": "20",
                        "age": "2",
                        "features": "bright green yellow and rose leaves",
                        "price": "220"
                    },
                    {
                        "id": "11",
                        "photo": `${plant25}`,
                        "plantName": "Violet",
                        "sorttName": "rfrhtfhgfh",
                        "size": "10",
                        "age": "1",
                        "features": "white ajour petals",
                        "price": "120"
                    },
                    {
                        "id": "12",
                        "photo": `${plant8}`,
                        "plantName": "Violet",
                        "sorttName": "dgdfgfhfg",
                        "size": "10",
                        "age": "2",
                        "features": "purple petals",
                        "price": "120"
                    },
                    {
                        "id": "13",
                        "photo": `${plant24}`,
                        "plantName": "Violet",
                        "sorttName": "fgjhkhjk",
                        "size": "10",
                        "age": "2",
                        "features": "rose petals",
                        "price": "130"
                    },
                    {
                        "id": "14",
                        "photo": `${plant26}`,
                        "plantName": "Violet",
                        "sorttName": "tuyjyu",
                        "size": "10",
                        "age": "2",
                        "features": "rose with violet dots petals",
                        "price": "150"
                    },
                    {
                        "id": "15",
                        "photo": `${plant9}`,
                        "plantName": "Cactus",
                        "sorttName": "ghjhkjhk",
                        "size": "10",
                        "age": "2",
                        "features": "Big golden flower like a sunflower",
                        "price": "100"
                    },
                    {
                        "id": "16",
                        "photo": `${plant13}`,
                        "plantName": "Cactus",
                        "sorttName": "rfgfrgrg",
                        "size": "10",
                        "age": "2",
                        "features": "soft yellow dots",
                        "price": "70"
                    },
                    {
                        "id": "17",
                        "photo": `${plant23}`,
                        "plantName": "Zigo cactus",
                        "sorttName": "dfhgfhgjgj",
                        "size": "10",
                        "age": "2",
                        "features": "dark rose petals",
                        "price": "150"
                    },
                    {
                        "id": "18",
                        "photo": `${plant27}`,
                        "plantName": "Zigo cactus",
                        "sorttName": "fghgjhgj",
                        "size": "10",
                        "age": "2",
                        "features": "white petals",
                        "price": "170"
                    },
                    {
                        "id": "19",
                        "photo": `${plant4}`,
                        "plantName": "Zigo cactus",
                        "sorttName": "rhtgjhgj",
                        "size": "10",
                        "age": "1",
                        "features": "red-orange petals",
                        "price": "120"
                    },
                    {
                        "id": "20",
                        "photo": `${plant15}`,
                        "plantName": "Chlorophitum",
                        "sorttName": "gfjhgjghj",
                        "size": "10",
                        "age": "2",
                        "features": "green and white leaves",
                        "price": "90"
                    },
                    {
                        "id": "21",
                        "photo": `${plant3}`,
                        "plantName": "Tradescantia",
                        "sorttName": "ghjhgjh",
                        "size": "10",
                        "age": "2",
                        "features": "green and white leaves",
                        "price": "100"
                    },
                    {
                        "id": "22",
                        "photo": `${plant12}`,
                        "plantName": "Tradescantia",
                        "sorttName": "fjghfdkl",
                        "size": "10",
                        "age": "2",
                        "features": "purple leaves",
                        "price": "80"
                    },
                    {
                        "id": "23",
                        "photo": `${plant1}`,
                        "plantName": "Eucharis",
                        "sorttName": "fghgfjhgjh",
                        "size": "10",
                        "age": "2",
                        "features": "big white flowers",
                        "price": "150"
                    },
                    {
                        "id": "24",
                        "photo": `${plant18}`,
                        "plantName": "Monstera",
                        "sorttName": "ghjhjk",
                        "size": "10",
                        "age": "2",
                        "features": "dark green leaves",
                        "price": "200"
                    },
                    {
                        "id": "25",
                        "photo": `${plant22}`,
                        "plantName": "Monstera",
                        "sorttName": "wdwwdwd",
                        "size": "25",
                        "age": "2",
                        "features": "dark green leaves",
                        "price": "300"
                    },
                    {
                        "id": "26",
                        "photo": `${plant21}`,
                        "plantName": "Orchid",
                        "sorttName": "Dendrobium",
                        "size": "10",
                        "age": "2",
                        "features": "midi violet petals",
                        "price": "300"
                    },
                    {
                        "id": "27",
                        "photo": `${plant28}`,
                        "plantName": "Sansevierra",
                        "sorttName": "fhghgh",
                        "size": "100",
                        "age": "2",
                        "features": "Long green and white leaves",
                        "price": "300"
                    }
                ]
            ), { timing: 1000 }
            )
        }
    })
}