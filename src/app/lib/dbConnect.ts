import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || " " ;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    console.log("Using existing database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new database connection...");
    cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => {
      console.log("MongoDB Connected Successfully!");
      return mongoose;
    }).catch((err) => {
      console.error("MongoDB Connection Error:", err);
      process.exit(1);
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

(global as any).mongoose = cached;

export default dbConnect;
