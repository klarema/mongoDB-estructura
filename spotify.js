db.artiste.insertMany(
    [
      {
        id: 1,
        nom: "Madenna",
        imatge: "" ,
        musicGenre: "pop",
      },
      {
        id: 2,
        nom: "Meet Leaf",
        imatge: "" ,
        musicGenre: "rock",
      },
      {
        id: 3,
        nom: "Lead Zip",
        imatge: "" ,
        musicGenre: "rock",
      },
      {
        id: 4,
        nom: "Snootie",
        imatge: "" ,
        musicGenre: "dance",
      },
      {
        id: 5,
        nom: "Country Jo",
        imatge: "" ,
        musicGenre: "country",
      },

    ]
  );
  db.album.insertMany(
    [
      {
        id: 1,
        titol: "All songs",
        any: "2015" ,
        imatge: "" ,
        cancoID: [],
        artisteID: 1
      },
      {
        id: 2,
        titol: "Album songs",
        any: "2015" ,
        imatge: "" ,
        cancoID: [],
        artisteID: 2
      },
      {
        id: 3,
        titol: "String songs",
        any: "2022" ,
        imatge: "" ,
        cancoID: [],
        artisteID: 5
      },
      {
        id: 4,
        titol: "One to 10.",
        any: "2019" ,
        imatge: "" ,
        cancoID: [],
        artisteID: 3
      },
      {
        id: 5,
        titol: "Turns Autumn",
        any: "2008" ,
        imatge: "" ,
        cancoID: [3, 5],
        artisteID: 2
      },
      {
        id: 6,
        titol: "LaLaLa",
        any: "2017" ,
        imatge: "" ,
        cancoID: [1,2, 4],
        artisteID: 1
      },
    ]
);
db.canco.insertMany(
    [
      {
        id: 1,
        titol: "one song",
        durada: 2 ,
        vegadesRepro: 0,
        albumID: 6,
      },
      {
        id: 2,
        titol: "two song",
        durada: 3.5 ,
        vegadesRepro: 0,
        albumID: 6,
      },
      {
        id: 3,
        titol: "three song",
        durada: 3 ,
        vegadesRepro: 0,
        albumID: 5,
      },
      {
        id: 4,
        titol: "four song",
        durada: 1.5 ,
        vegadesRepro: 0,
        albumID: 6,
      },    
      {
        id: 5,
        titol: "five song",
        durada: 2.2 ,
        vegadesRepro: 0,
        albumID: 4,
      },  
    ]
);
db.usuari.insertMany(
    [
      {
        id: 1,
        type: "Free",
        email: "jo@hmail.com" ,
        password: "passowrd1",
        nom: "Jo Freeway",
        dataNax: "1999-01-01",
        sexe: "M" ,
        pais: "New Zealand",
        CP: "N4567",
      },
      {
        id: 2,
        type: "Premium",
        email: "Hou@gmail.com" ,
        password: "passowrd2",
        nom: "Ben Dunne",
        dataNax: "1999-01-01",
        sexe: "M" ,
        pais: "France",
        CP: "N4567",
      },
      {
        id: 3,
        type: "Premium",
        email: "K88@gmail.com" ,
        password: "passowrd3",
        nom: "Lola Harris",
        dataNax: "1999-01-01",
        sexe: "F" ,
        pais: "France",
        CP: "N4567",
      },

    ]
);
db.playlist.insertMany(
    [
      {
        id: 1,
        titol: "My A Playlist",
        nombre_Cancons: [{id:1, name: "one song"}, {id:3, name: "three song"}] ,
        createDate: "2021-01-01 00:00:00",
        usuariID: "2" ,
        playlistCompartidaId: []
      },
      {
        id: 2,
        titol: "My B Playlist",
        nombre_Cancons: [{id:4, name: "four song"}, ] ,
        createDate: "2021-02-15 00:00:00",
        usuariID: "2" ,
        playlistCompartidaId: []
      },
      {
        id: 3,
        titol: "Playlist one",
        nombre_Cancons: [{id:5, name: "five song"}, {id:1, name: "one song"}, {id:3, name: "three song"} ] ,
        createDate: "2021-01-01 00:00:00",
        usuariID: "3" ,
        playlistCompartidaId: []
      },
    ]
);
db.playlistCompartida.insertOne(    
    {
        id: 1,
        canconAfegit: "three song",
        dateAdded: "2021-02-19 15:00:00",
        usuariID: "2" ,  
    },
);
db.playlist.updateOne({"id":"3"}, {"$push": {id: 1}});

db.favourites.insertMany(
    [
      {
        albumId: 3,
        usuariID: "2" ,
      },
      {
        cancoId: 2,
        usuariID: "2" ,
      },
      {
        albumId: 1,
        usuariID: "3" ,
      },
    ]
);    
db.subscriptions.insertMany(
    [
      {
        id: 1,
        inici_date: "2020-01-20 00:00:00" ,
        renova_date: "2023-01-01 00:00:00" ,
        pagament_type: "paypal" ,
        usuariID: "2" ,
      },
      {
        id: 2,
        inici_date: "2021-03-30 00:00:00" ,
        renova_date: "2023-01-01 00:00:00" ,
        pagament_type: "tarjeta" ,
        usuariID: "3" ,
      },
    ]
); 
db.pagaments.insertMany(
    [
      {
        id: 1,
        orderDate: "2021-01-01 00:00:00" ,
        orderNumber: "00001" ,
        total: "120.50" ,
        subscriptionID: "1" ,
        pagamentDades: {type: "paypal", nom: "Ben Dunne"},
      },
      {
        id: 2,
        orderDate: "2022-03-01 00:00:00" ,
        orderNumber: "00002" ,
        total: "105.50" ,
        subscriptionID: "2" ,
        pagamentDades: {type: "targeta", numeroTargeta: "123456789", caducitat: "01/25",codiSeguredad: "456"},
      },
    ]
); 

