import { createServer } from "miragejs";

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
                        "photo": "./src/assets/images/plant16.jpg",
                        "plantName": "Orchid",
                        "sorttName": "Black Pearl",
                        "size": "10",
                        "age": "2",
                        "features": "mini/midi dark purple petals",
                        "price": "300"
                    },
                    {
                        "id": "2",
                        "photo": "./src/assets/images/plant10.jpg",
                        "plantName": "Orchid",
                        "sorttName": "Golden Beauty",
                        "size": "10",
                        "age": "2",
                        "features": "max yellow with purple petals",
                        "price": "250"
                    },
                    {
                        "id": "3",
                        "photo": "./src/assets/images/plant7.jpg",
                        "plantName": "Orchid",
                        "sorttName": "Golden Queen",
                        "size": "30",
                        "age": "2",
                        "features": "max yellow petals",
                        "price": "280"
                    },
                    {
                        "id": "4",
                        "photo": "./src/assets/images/plant6.jpg",
                        "plantName": "Orchid",
                        "sorttName": "Las Vegas",
                        "size": "10",
                        "age": "1",
                        "features": "max yellow with brown petals",
                        "price": "350"
                    },
                    {
                        "id": "5",
                        "photo": "./src/assets/images/plant13.jpg",
                        "plantName": "Orchid",
                        "sorttName": "Yellow splash",
                        "size": "20",
                        "age": "1",
                        "features": "max yellow petals",
                        "price": "300"
                    },
                    {
                        "id": "6",
                        "photo": "./src/assets/images/plant19.jpg",
                        "plantName": "Orchid",
                        "sorttName": "Liodoro",
                        "size": "15",
                        "age": "2",
                        "features": "midi yellow with red petals, smells",
                        "price": "360"
                    },
                    {
                        "id": "7",
                        "photo": "./src/assets/images/plant20.jpg",
                        "plantName": "Orchid",
                        "sorttName": "Biondoro",
                        "size": "10",
                        "age": "2",
                        "features": "midi yellow petals",
                        "price": "320"
                    },
                    {
                        "id": "8",
                        "photo": "./src/assets/images/plant11.jpg",
                        "plantName": "Dracena",
                        "sorttName": "GFHGHG",
                        "size": "60",
                        "age": "2",
                        "features": "green and white and rose leaves",
                        "price": "200"
                    },
                    {
                        "id": "9",
                        "photo": "./src/assets/images/plant17.jpg",
                        "plantName": "Dracena",
                        "sorttName": "fdgfggfhg",
                        "size": "45",
                        "age": "2",
                        "features": "green and purple leaves",
                        "price": "180"
                    },
                    {
                        "id": "10",
                        "photo": "./src/assets/images/plant5.jpg",
                        "plantName": "Cordilina",
                        "sorttName": "fhggjh",
                        "size": "20",
                        "age": "2",
                        "features": "bright green yellow and rose leaves",
                        "price": "220"
                    },
                    {
                        "id": "11",
                        "photo": "./src/assets/images/plant25.jpg",
                        "plantName": "Violet",
                        "sorttName": "rfrhtfhgfh",
                        "size": "10",
                        "age": "1",
                        "features": "white ajour petals",
                        "price": "120"
                    },
                    {
                        "id": "12",
                        "photo": "./src/assets/images/plant8.jpg",
                        "plantName": "Violet",
                        "sorttName": "dgdfgfhfg",
                        "size": "10",
                        "age": "2",
                        "features": "purple petals",
                        "price": "120"
                    },
                    {
                        "id": "13",
                        "photo": "./src/assets/images/plant24.jpg",
                        "plantName": "Violet",
                        "sorttName": "fgjhkhjk",
                        "size": "10",
                        "age": "2",
                        "features": "rose petals",
                        "price": "130"
                    },
                    {
                        "id": "14",
                        "photo": "./src/assets/images/plant26.jpg",
                        "plantName": "Violet",
                        "sorttName": "tuyjyu",
                        "size": "10",
                        "age": "2",
                        "features": "rose with violet dots petals",
                        "price": "150"
                    },
                    {
                        "id": "15",
                        "photo": "./src/assets/images/plant9.jpg",
                        "plantName": "Cactus",
                        "sorttName": "ghjhkjhk",
                        "size": "10",
                        "age": "2",
                        "features": "Big golden flower like a sunflower",
                        "price": "100"
                    },
                    {
                        "id": "16",
                        "photo": "./src/assets/images/plant13.jpg",
                        "plantName": "Cactus",
                        "sorttName": "rfgfrgrg",
                        "size": "10",
                        "age": "2",
                        "features": "soft yellow dots",
                        "price": "70"
                    },
                    {
                        "id": "17",
                        "photo": "./src/assets/images/plant23.jpg",
                        "plantName": "Zigo cactus",
                        "sorttName": "dfhgfhgjgj",
                        "size": "10",
                        "age": "2",
                        "features": "dark rose petals",
                        "price": "150"
                    },
                    {
                        "id": "18",
                        "photo": "./src/assets/images/plant27.jpg",
                        "plantName": "Zigo cactus",
                        "sorttName": "fghgjhgj",
                        "size": "10",
                        "age": "2",
                        "features": "white petals",
                        "price": "170"
                    },
                    {
                        "id": "19",
                        "photo": "./src/assets/images/plant4.jpg",
                        "plantName": "Zigo cactus",
                        "sorttName": "rhtgjhgj",
                        "size": "10",
                        "age": "1",
                        "features": "red-orange petals",
                        "price": "120"
                    },
                    {
                        "id": "20",
                        "photo": "./src/assets/images/plant15.jpg",
                        "plantName": "Chlorophitum",
                        "sorttName": "gfjhgjghj",
                        "size": "10",
                        "age": "2",
                        "features": "green and white leaves",
                        "price": "90"
                    },
                    {
                        "id": "21",
                        "photo": "./src/assets/images/plant3.jpg",
                        "plantName": "Tradescantia",
                        "sorttName": "ghjhgjh",
                        "size": "10",
                        "age": "2",
                        "features": "green and white leaves",
                        "price": "100"
                    },
                    {
                        "id": "22",
                        "photo": "./src/assets/images/plant12.jpg",
                        "plantName": "Tradescantia",
                        "sorttName": "fjghfdkl",
                        "size": "10",
                        "age": "2",
                        "features": "purple leaves",
                        "price": "80"
                    },
                    {
                        "id": "23",
                        "photo": "./src/assets/images/plant1.jpg",
                        "plantName": "Eucharis",
                        "sorttName": "fghgfjhgjh",
                        "size": "10",
                        "age": "2",
                        "features": "big white flowers",
                        "price": "150"
                    },
                    {
                        "id": "24",
                        "photo": "./src/assets/images/plant18.jpg",
                        "plantName": "Monstera",
                        "sorttName": "ghjhjk",
                        "size": "10",
                        "age": "2",
                        "features": "dark green leaves",
                        "price": "200"
                    },
                    {
                        "id": "25",
                        "photo": "./src/assets/images/plant22.jpg",
                        "plantName": "Monstera",
                        "sorttName": "wdwwdwd",
                        "size": "25",
                        "age": "2",
                        "features": "dark green leaves",
                        "price": "300"
                    },
                    {
                        "id": "26",
                        "photo": "./src/assets/images/plant21.jpg",
                        "plantName": "Orchid",
                        "sorttName": "Dendrobium",
                        "size": "10",
                        "age": "2",
                        "features": "midi violet petals",
                        "price": "300"
                    },
                    {
                        "id": "27",
                        "photo": "./src/assets/images/plant28.jpg",
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