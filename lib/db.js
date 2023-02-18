import {MongoClient} from 'mongodb';

export async function connectToDatabase(){
    const client = await MongoClient.connect(process.env.MONGO_URI)

    return client
}

