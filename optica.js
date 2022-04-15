db.proveidor.insertMany(
  [
    {
      nom: "ProviderOne",
      adreca: [ "Highland St", "121", "3", "6", "London", "SW1234", "England"],
      telefon: '123456789',
      fax: "445588965",
      NIF: "FE123456"
    },
    {
      nom: "ProviderTwo",
      adreca: [ "Santa Gloria", "14", "4", "4C", "Roma", "RM7676", "Italia"],
      telefon: '552778899',
      fax: "111222333",
      NIF: "FE123456"
    }
  ]
);

  db.client.insertMany(
    [
    {
      nom: "Carla Mendez",
      adrecaPostal: "08014",
      telefon: '123456789',
      correuElectrònic: "carla@mail.com",
      dataDeRregistre: "2020-12-12",
      recommanat: "YES"
    },
    {
      nom: "Rita Sanchez",
      adrecaPostal: "08016",
      telefon: '619885522',
      correuElectrònic: "rita27@mail.com",
      dataDeRregistre: "2022-10-10",
      recommanat: "NO"
    },
    {
      nom: "Pep Garolli",
      adrecaPostal: "08021",
      telefon: '670115599',
      correuElectrònic: "PG@mail.com",
      dataDeRregistre: "2021-12-12",
      recommanat: "YES"
    },
    {
      nom: "Ulises Marques",
      adrecaPostal: "08014",
      telefon: '681448811',
      correuElectrònic: "uli1983@mail.com",
      dataDeRregistre: "2022-01-01",
      recommanat: "YES"
    },
    {
      nom: "Julia Greiss",
      adrecaPostal: "08016",
      telefon: '617885533',
      correuElectrònic: "greiss11@mail.com",
      dataDeRregistre: "2021-01-01",
      recommanat: "NO"
    },
    {
    nom: "Ulises B. Marques",
    adrecaPostal: "08014",
    telefon: '619998877',
    correuElectrònic: "uliB@mail.com",
    dataDeRregistre: "2022-03-03",
    recommanat: "YES"
    }
  ] 
);

db.ulleres.insertMany(
  [
    {
      marca: "chanel",
      graduacion: "+0.5",
      muntura: 'metal',
      colorMuntura: "grey",
      colorVidres: "blue",
      preu: "9100",
      proveidor: "1"
    },
    {
      marca: "chanel",
      graduacion: "+0.5",
      muntura: 'plastic',
      colorMuntura: "white",
      colorVidres: "clear",
      preu: "1500",
      proveidor: "1"
    },
    {
      marca: "ray",
      graduacion: "+0.5",
      muntura: 'metal',
      colorMuntura: "grey",
      colorVidres: "blue",
      preu: "4500",
      proveidor: "2"
    },
    {
      marca: "blue-jean",
      graduacion: "+0.5",
      muntura: 'plastic',
      colorMuntura: "pink",
      colorVidres: "blue",
      preu: "6200",
      proveidor: "2"
    },
    {
      marca: "chanel",
      graduacion: "+2.5",
      muntura: 'plastic',
      colorMuntura: "red",
      colorVidres: "clear",
      preu: "8500",
      proveidor: "1"
    },
    {
      marca: "blue-jean",
      graduacion: "-1.5",
      muntura: 'plastic',
      colorMuntura: "grey",
      colorVidres: "clear",
      preu: "6000",
      proveidor: "2"
    },
    {
      marca: "blue-jean",
      graduacion: "+1.5",
      muntura: 'metal',
      colorMuntura: "blue",
      colorVidres: "clear",
      preu: "4000",
      proveidor: "2"
    },
    {
      marca: "ray",
      graduacion: "+1.5",
      muntura: 'plastic',
      colorMuntura: "black",
      colorVidres: "clear",
      preu: "7500",
      proveidor: "2"
    },
    {
      marca: "ray",
      graduacion: "-0.5",
      muntura: 'plastic',
      colorMuntura: "grey",
      colorVidres: "clear",
      preu: "8000",
      proveidor: "2"
    },
    {
      marca: "chanel",
      graduacion: "-0.5",
      muntura: 'metal',
      colorMuntura: "black",
      colorVidres: "clear",
      preu: "9900",
      proveidor: "1"
    },
  ]
);
db.vendes.insertMany(
  [
    {
      empleat: "Maria Lens",
      fecha: "2020-07-07",
      client_id: '1',
      ulleres_id: "1"
    },
    {
      empleat: "Maria Lens",
      fecha: "2021-04-04",
      client_id: '6',
      ulleres_id: "3"
    },
    {
      empleat: "Maria Lens",
      fecha: "2021-11-11",
      client_id: '3',
      ulleres_id: "6"
    },
    {
      empleat: "Toni Garcia",
      fecha: "2021-12-12",
      client_id: '5',
      ulleres_id: "8"
    },
    {
      empleat: "Toni Garcia",
      fecha: "2021-12-12",
      client_id: '5',
      ulleres_id: "6"
    },
    {
      empleat: "Maria Lens",
      fecha: "2022-03-03",
      client_id: '2',
      ulleres_id: "4"
    },
    {
      empleat: "Toni Garcia",
      fecha: "2022-02-02",
      client_id: '4',
      ulleres_id: "10"
    },  
    {
    empleat: "Maria Lens",
    fecha: "2022-02-02",
    client_id: '1',
    ulleres_id: "2"
    }
  ]
);

