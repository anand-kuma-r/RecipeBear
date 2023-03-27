
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://anandak2903:Anand%21%40%232903@recipe.insoiud.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

client.connect();
const database = client.db('recipebear');
const collection = database.collection('recipes');

