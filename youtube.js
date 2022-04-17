db.usuari.insertMany(
  [
    {
      id: 1,
      email: "yeti@youtube.com",
      playlistIDs: [],
      // [ "Highland St", "121", "3", "6", "London", "SW1234", "England"],
      canalID: null,
      comenatarisID: [],
      password: "Password1",
      nonUsuari: "yeti-101",
      dataNax: "1989-12-12",
      sexe: "F",
      pais: "ESP",
      CP: "08046"
    },
    {
      id: 2,
      email: "maya@gmail.com",
      playlistIDs: [],
      canalID: null,
      comenatarisID: [],
      password: "Password2",
      nonUsuari: "maya1985",
      dataNax: "1979-11-11",
      sexe: "M",
      pais: "ESP",
      CP: "08092"
    },
    {
      id: 3,
      email: "frank@hotmail.com",
      playlistIDs: [],
      canalID: null,
      comenatarisID: [],
      password: "Password3",
      nonUsuari: "franky",
      dataNax: "1999-06-06",
      sexe: "F",
      pais: "US",
      CP: "123456"
    },
    {
    id: 4,
    email: "rosa21@mailDrake.com",
    playlistIDs: [],
    canalID: null,
    comenatarisID: [],
    password: "Password4",
    nonUsuari: "rosa_gs",
    dataNax: "2004-03-03",
    sexe: "F",
    pais: "UK",
    CP: "SW1234"
  },
  {
    id: 5,
    email: "williamTall@gmail.com",
    playlistIDs: [],
    canalID: null,
    comenatarisID: [],
    password: "Password5",
    nonUsuari: "tallWill",
    dataNax: "2000-02-02",
    sexe: "M",
    pais: "UK",
    CP: "SQ2321"
  },

  ]
);
db.canal.insertOne(
  {
    id: 1,
    nom: "channelYeti",
    description: "film clips",
    created: "2021-10-11",
    subscriberID: [2,4,5],
    UsuariId: 1
  },
);
db.video.insertMany(
  [
    {
      id: 1,
      titol: "Falling",
      description: "very funny film clip",
      size: "2",
      nomarxiu: "comedy",
      durada: 120,
      thumbnail: "a blob, 64 encoded file - TO DO",
      playCounts: 0,
      likeCount: 0,
      dislikeCount: 0, 
      estat: "public",
      UsuariId: 1,
      published_date: new Timestamp(),
      label: "comedy"
    },
    {
    id: 2,
    titol: "Red Tiles",
    description: "very modern film clip",
    size: "1",
    nomarxiu: "modern",
    durada: 60,
    thumbnail: "a blob, 64 encoded file - TO DO",
    playCounts: 0,
    likeCount: 0,
    dislikeCount: 0, 
    estat: "public",
    UsuariId: 1,
    published_date: new Timestamp(),
    label: "modern"
  },
  {
    id: 3,
    titol: "Blue Skies",
    description: "very classic film clip",
    size: "1",
    nomarxiu: "classic",
    durada: 60,
    thumbnail: "a blob, 64 encoded file - TO DO",
    playCounts: 0,
    likeCount: 0,
    dislikeCount: 0, 
    estat: "public",
    UsuariId: 1,
    published_date: new Timestamp(),
    label: "classic"
  },
  {
    id: 4,
    titol: "Diff",
    description: "very different film clip",
    size: "2",
    nomarxiu: "different",
    durada: 100,
    thumbnail: "a blob, 64 encoded file - TO DO",
    playCounts: 0,
    likeCount: 0,
    dislikeCount: 0, 
    estat: "public",
    UsuariId: 1,
    published_date: new Timestamp(),
  },
  {
    id: 5,
    titol: "Truthy",
    description: "very Truthy news film clip",
    size: "1",
    nomarxiu: "news",
    durada: 30,
    thumbnail: "a blob, 64 encoded file - TO DO",
    playCounts: 0,
    likeCount: 0,
    dislikeCount: 0, 
    estat: "privat",
    UsuariId: 1,
    published_date: new Timestamp(),
    label: "news"
  },
  {
    id: 6,
    titol: "Halo signs",
    description: "very film clip",
    size: "1",
    nomarxiu: "modern",
    durada: 60,
    thumbnail: "a blob, 64 encoded file - TO DO",
    playCounts: 0,
    likeCount: 0,
    dislikeCount: 0, 
    estat: "privat",
    UsuariId: 1,
    published_date: new Timestamp(),
    label: "modern"
  },
  {
    id: 7,
    titol: "Red",
    description: "very clip clip",
    size: "1",
    nomarxiu: "classic",
    durada: 60,
    thumbnail: "a blob, 64 encoded file - TO DO",
    playCounts: 0,
    likeCount: 0,
    dislikeCount: 0, 
    estat: "privat",
    UsuariId: 1,
    published_date: new Timestamp(),
    label: "classic"
  },
  {
    id: 8,
    titol: "Other",
    description: "very another time",
    size: "2",
    nomarxiu: "comedy",
    durada: 60,
    thumbnail: "a blob, 64 encoded file - TO DO",
    playCounts: 0,
    likeCount: 0,
    dislikeCount: 0, 
    estat: "public",
    UsuariId: 1,
    published_date: new Timestamp(),
    label: "comedy"
  },
  {
    id: 9,
    titol: "Falsy",
    description: "very falsy time",
    size: "1",
    nomarxiu: "news",
    durada: 30,
    thumbnail: "a blob, 64 encoded file - TO DO",
    playCounts: 0,
    likeCount: 0,
    dislikeCount: 0, 
    estat: "public",
    UsuariId: 1,
    published_date: new Timestamp(),
    label: "news"
  },
  ]
);
db.registre_likes_dislikes.insertMany(
  [
    {
      id: 1,
      like_dislike: "Like",
      date: "2022-01-02 13:00:30", 
      Usuari_id: "2",
      video_id: 1,
    },
    // to add more
  ]
);
db.video.find({id:1 });
db.video.updateOne({"id":1}, {"$inc": {"likeCount": 1}});
// to update to updateMany, or more updateOne
db.canal.updateOne({"id":"1"}, {"$push": {0: 2}});

db.comentari.insertMany(
  [
    {
      id: 1,
      comentari: "I like this video a lot.",
      dateRegistered: "2022-03-02 18:10:30", 
      agradaONo: "like",
      video_id: 9,
    },
    // to add more
  ]
);
db.comentariXUsuairi.insertOne({
  id: 1,
  comentariID: 1,
  UsuariId: 3,
  video_id: 2,
})

db.playlist.insertMany(
  [
    {
      id: 1,
      nom: "Top two",
      dateCreated: "2022-01-18 18:20:30",
      playlistItemsID: [1, 2, 5, 10], 
      estat: "public",
      usuariId: 2,
    },
    {
      id: 2,
      nom: "Private list",
      dateCreated: "2022-01-18 19:10:30",
      playlistItemsID: [3,6], 
      estat: "private",
      usuariId: 2,
    },
    {
      id: 3,
      nom: "Favourites",
      dateCreated: "2022-02-19 14:20:30", 
      playlistItemsID: [1, 2,3,7], 
      estat: "public",
      usuariId: 4,
    },
  ]
);
