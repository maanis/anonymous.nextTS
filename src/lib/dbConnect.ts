import mongoose from "mongoose"

type connectionType = {
    isConnected?: number
}

const connectionObject: connectionType = {}

async function dbConnect: Promise<void>(){
    if (connectionObject.isConnected) {
        console.log("Db is already connected")
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '')
        connectionObject.isConnected = db.connections[0].readyState
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Error connecting DB", error)
        process.exit(1)
    }
}

export default dbConnect;