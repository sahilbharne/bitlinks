import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {}; // no need for useNewUrlParser

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env or Vercel environment variables');
}

if (process.env.NODE_ENV === 'development') {
  // In dev, use a global variable so hot reload doesn't create new client
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
