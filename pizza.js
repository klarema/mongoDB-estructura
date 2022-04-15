
db.provincia.insertMany( 
    [
        {
            id: "1",
            nom: 'Gerona',
            parent: null,
        },
        {
            id: "2",
            nom: 'Tarragona',
            parent: null,
        },
    ]
);
db.localidad.insertMany( 
    [
        {
            id: "1",
            nom: 'Palafrugell',
            provincia: "1",
            parent: "provincia.1"
        },
        {
            id: "2",
            nom: 'Llivia',
            provincia: "1",
            parent: "provincia.1"
        },
        {
            id: "3",
            nom: 'Tortosa',
            provincia: "2",
            parent: "provincia.2"
        },
        {
            id: "4",
            nom: 'Cambrils',
            provincia: "2",
            parent: "provincia.2"
        },
    ]
);
db.client.insertMany( 
    [
        {
            id: "1",
            nom: 'Julia',
            cognom: "Merced",
            adreca: [ "123 Rocafell 3B", "05514"], // how to add localidad parent on address 
            localidad: "3"
        },
        {
            id: "2",
            nom: 'Martin',
            cognom: "Gonzalez",
            adreca: [ "Palltel Cases 14-16", "05478"], 
            localidad: "3"
        },
        {
            id: "3",
            nom: 'Juan',
            cognom: "Martin",
            adreca: [ "88C Fabra Pau 234", "05515"], 
            localidad: "1"
        },
        {
            id: "4",
            nom: 'Antoni',
            cognom: "Balleston",
            adreca: [ "123 Rocafell 3B", "05431"], 
            localidad: "2"
        },
        {
            id: "5",
            nom: 'Reni',
            cognom: "Sandrea",
            adreca: [ "Jironell Bajo 7", "05661"], 
            localidad: "4"
        },
    ]
);
db.botiga.insertMany( 
    [
        {
            id: "1",
            adreca: {address: ["88 Rocafell 1-2", "05431", "2"], parent: "localidad.2"},
        },
        {
            id: "2",
            adreca: {address: ["123 Castrel Roig 5", "05514", "3"], parent: "localidad.3"},
        },
    ]
);
db.category.insertMany( 
    [
        {
            id: "1",
            nom: "Winter",
        },
        {
            id: "2",
            nom: "Summer",
        },
    ]
);
db.productes.insertMany( 
    [
        {
            id: "1",
            nom: "Pizza Grand",
            description: "Grand with 4 cheeses",
            image: "",
            preu: "9.50",
            categoryID: "1",
        },
        {
            id: "2",
            nom: "Pizza Petit",
            description: "Petit with spinach",
            image: "",
            preu: "6.50",
            categoryID: "1",
        },
        {
            id: "3",
            nom: "Burger Vegan",
            description: "Aubergine and mushroom",
            image: "",
            preu: "8.00",
            categoryID: "",
        },
        {
            id: "4",
            nom: "Pizza Deep",
            description: "Pizza with salami, cheesy",
            image: "",
            preu: "8.00",
            categoryID: "1",
        },
        {
            id: "5",
            nom: "Burger Maesto",
            description: "Double burger with bacon",
            image: "",
            preu: "10.00",
            categoryID: "",
        },
        {
            id: "6",
            nom: "Pep-cola",
            description: "Like Pepsi like cola",
            image: "",
            preu: "2.10",
            categoryID: "",
        },
        {
            id: "7",
            nom: "Vitagua",
            description: "Natural water",
            image: "",
            preu: "3.70",
            categoryID: "",
        },
        {
            id: "8",
            nom: "Burger Cheese",
            description: "Double cheese",
            image: "",
            preu: "4.80",
            categoryID: "",
        },
        {
            id: "9",
            nom: "Pizza Crusty",
            description: "Thin base tomato",
            image: "",
            preu: "7.90",
            categoryID: "2",
        },      
    ]
);
db.empleat.insertMany( 
    [
        {
            id: "1",
            nom: "Lola",
            cognom: "Maritem",
            NIF: "M12345678",
            tel: "123-456-789",
            tasc: "cuiner",
            botigaID: "1",
        },   
        {
            id: "2",
            nom: "Michel",
            cognom: "Oreli",
            NIF: "J17891164",
            tel: "155-456-449",
            tasc: "repartidor",
            botigaID: "1",
        },
        {
            id: "3",
            nom: "Ana",
            cognom: "Durell",
            NIF: "P12215487",
            tel: "111-589-780",
            tasc: "cuiner",
            botigaID: "2",
        },  
        {
            id: "4",
            nom: "Stella",
            cognom: "Dann",
            NIF: "M22558877",
            tel: "321-498-722",
            tasc: "repartidor",
            botigaID: "2",
        },     
    ]
);
db.comandes.insertMany( 
    [
        {
            id: "1",
            OrderedAt: "2021-12-10 19:02:25",
            DeliveryType: "domicili",
            DeliveredAt: "2021-12-10 20:25:25",
            botigaID: "1",
            empleatID: "1",
            ClientID: "1",
        },
        {
            id: "2",
            OrderedAt: "2021-12-18 16:25:25",
            DeliveryType: "domicili",
            DeliveredAt: "2021-12-18 17:49:25",
            botigaID: "2",
            empleatID: "4",
            ClientID: "5",
        },  
        {
            id: "3",
            OrderedAt: "2022-01-11 22:32:25",
            DeliveryType: "domicili",
            DeliveredAt: "2022-01-11 23:15:25",
            botigaID: "1",
            empleatID: "2",
            ClientID: "4",
        }, 
        {
            id: "4",
            OrderedAt: "2022-01-19 20:10:25",
            DeliveryType: "botiga",
            DeliveredAt: "2022-02-05 18:57:25",
            botigaID: "1",
            empleatID: "1",
            ClientID: "4",
        }, 
        {
            id: "5",
            OrderedAt: "2022-02-05 18:10:25",
            DeliveryType: "botiga",
            DeliveredAt: "2022-02-05 18:57:25",
            botigaID: "2",
            empleatID: "3",
            ClientID: "1",
        }, 
    ]
);
db.comandesProductes.insertMany( 
    [
        {
            id: "1",
            comandesID: "1",
            productID: "2",
        },
        {
            id: "2",
            comandesID: "1",
            productID: "4",
        },
        {
            id: "3",
            comandesID: "1",
            productID: "6",
        },
        {
            id: "4",
            comandesID: "1",
            productID: "7",
        },
        {
            id: "5",
            comandesID: "2",
            productID: "7",
        },
        {
            id: "6",
            comandesID: "2",
            productID: "7",
        },
        {
            id: "7",
            comandesID: "2",
            productID: "6",
        },
        {
            id: "8",
            comandesID: "2",
            productID: "8",
        },
        {
            id: "9",
            comandesID: "2",
            productID: "9",
        },
        {
            id: "10",
            comandesID: "2",
            productID: "2",
        },
        {
            id: "11",
            comandesID: "3",
            productID: "8",
        },
        {
            id: "12",
            comandesID: "3",
            productID: "8",
        },
        {
            id: "13",
            comandesID: "3",
            productID: "7",
        },
        {
            id: "14",
            comandesID: "4",
            productID: "5",
        },
        {
            id: "15",
            comandesID: "4",
            productID: "7",
        },
        {
            id: "16",
            comandesID: "5",
            productID: "1",
        },
        {
            id: "17",
            comandesID: "5",
            productID: "4",
        },
        {
            id: "18",
            comandesID: "5",
            productID: "9",
        },
        {
            id: "19",
            comandesID: "5",
            productID: "6",
        },
        {
            id: "20",
            comandesID: "5",
            productID: "7",
        },
    ]
);


