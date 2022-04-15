# mongoDB-estructura

Set-up:
mongoDB installed and running
mongosh installed
mongo compass installed, connected on localhost default port 27017

CREATE DB:
mongosh: use <nameThisDB>

ADD DATA FROM JS FILE
In mongo install directory (Program files)
copy the .js file into the mongo \bin folder
run: mongo localhost:27017/<nameThisDB> 'fileName.js'
  
MONGO COMPASS, refresh:
Verify database created, 
Collections created in database,
Collections have documents (filter {})
