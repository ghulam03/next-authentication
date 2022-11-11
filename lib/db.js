import { MongoClient } from "mongodb";

//const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.u8iq0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://username:password@cluster1.u8iq0.mongodb.net/nextAuthentication?retryWrites=true&w=majority"
  );

  return client;
}

