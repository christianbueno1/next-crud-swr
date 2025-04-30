# Entry point
```bash
# data
#vim data-todos.csv

# Step 2: Prepare Initialization Scripts
mkdir mongo-init
# 2.1 Create a JavaScript Initialization File
vim mongo-init/init.js

# 2.2 Create a Shell Script for Importing CSV
#vim mongo-init/import.sh

#chmod +x import.sh

# directory
mongo-init/
├── init.js
#└── import.sh


# Step 4: Run the Container with Volume Mounting
podman run -d --name todo \
-e MONGO_INITDB_ROOT_USERNAME=chris \
-e MONGO_INITDB_ROOT_PASSWORD='maGazine1!' \
-e MONGO_INITDB_DATABASE=company \
-p 27017:27017 \
-v ./mongo-init:/docker-entrypoint-initdb.d \
mongodb-community-server:7.0.16-ubi9


# Corrected Command to Create the MongoDB Container
# SELinux Context: :z
podman create --name todo \
-e MONGODB_INITDB_ROOT_USERNAME=chris \
-e MONGODB_INITDB_ROOT_PASSWORD='maGazine1!' \
-e MONGO_INITDB_DATABASE=company \
-p 27017:27017 \
-v ./mongo-init:/docker-entrypoint-initdb.d:z \
mongodb-community-server:7.0.16-ubi9



# Additional Steps After Container Creation
# Step 5: Copy CSV File into Container
#podman cp ./data/data-todos.csv todo:/data-todos.csv

# Start the Container:
podman start todo

# Check Container Logs:
podman logs todo

```

## example shell script
```
#!/bin/bash
# import.sh
mongoimport --uri "mongodb://chris:maGazine1!@localhost:27017/company?authSource=admin" \
# mongoimport --uri "mongodb://chris:maGazine1!@localhost:27017/company" \
--collection todos --type csv --file /data-todos.csv --headerline

```

## example data.csv file
```
text,isCompleted,id
go to the gym,false,1
buy food,false,2
buy the gifts,false,3
clean the house,false,4
call mom,false,5
finish report,false,6
schedule dentist,false,7
pay bills,false,8
wash car,false,9
walk dog,false,10

```
## products.csv
```
name,price,category,stock,supplier
Gaming Laptop,1299.99,Electronics,25,TechCorp
Wireless Mouse,45.99,Accessories,100,LogiTech
Smart Watch,299.99,Wearables,50,AppleTech
Bluetooth Speaker,89.99,Audio,75,SoundMaster
USB-C Cable,15.99,Accessories,200,CableWorks
```

# Step 6: Verify Database and Collection Creation
```
podman exec -it todo mongosh --username chris --password maGazine1! --authenticationDatabase admin

# Once connected, check for your database and collection:
use company;
show collections; 
db.todos.find().pretty();


```