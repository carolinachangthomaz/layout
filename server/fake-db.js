const Rental = require('./models/rental');
class FakeDB{

    constructor(){
        this.rentals = [{
            title: "Nice view on ocean",
            city: "São Paulo",
            street: "Avenida Santo Amaro",
            category: "condo",
            imagens: ["https://i.ibb.co/7rvYHNr/image041.jpg","https://i.ibb.co/XD7d2hX/image051.jpg","https://i.ibb.co/n6FtVZB/image053.jpg"],
            image: ["https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg"],
            bedrooms: 4,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 43
            },
            {
            title: "Alameda Jardins",
            city: "São Paulo",
            street: "RUA CHABAD, 86",
            category: "Apartamento",
            imagens: ["https://i.ibb.co/fxZ6kL6/image046.jpg","https://i.ibb.co/yybsRGM/image045.jpg","https://i.ibb.co/XJg0TMh/image057.jpg"],
            image: [{src:"https://i.ibb.co/fxZ6kL6/image046.jpg", texto: "Imagem 1"},
                    {src:"https://i.ibb.co/yybsRGM/image045.jpg", texto: "Imagem 2"},
                    {src:"https://i.ibb.co/XJg0TMh/image057.jpg", texto: "Imagem 3"}],
            bedrooms: 1,
            shared: false,
            description: "50 metros do metrô Oscar Freire",
            dailyRate: 11
            },
            {
            title: "Old house in nature",
            city: "Spisska Nova Ves",
            street: "Banicka 1",
            category: "house",
            imagens: ["https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg","https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg","https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg"],
            imagens: ["https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",],
            image: [{src:"https://i.ibb.co/n6FtVZB/image053.jpg", texto: "Imagem 1"},
                    {src:"https://i.ibb.co/XD7d2hX/image051.jpg", texto: "Imagem 2"},
                    {src:"https://i.ibb.co/n6FtVZB/image053.jpg", texto: "Imagem 3"}],
            bedrooms: 5,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 23
}] 
    }

    async cleanDB() {
      await  Rental.deleteMany();
    }

    pushRentalsToDb(){
        this.rentals.forEach((rental) => {
           const newRental = new Rental(rental);

           newRental.save();
        })
    }

    seeDb(){
        this.cleanDB();
        this.pushRentalsToDb();
    }
}


module.exports = FakeDB;