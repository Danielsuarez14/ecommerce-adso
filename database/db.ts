import mongoose from 'mongoose';

/** Database states
 0 = disconnected
 1 = connected
 2 = connecting
 3 = desconnecting */

 const mongoConection = {
    isConnect: 0,
 };

 export const connect = async () => {
    // we review if we are connected
    if (mongoConection.isConnect) {
        console.log('We are connected');
        return;
    }
    //we check if there is a connection
    if (mongoose.connections.length > 0) {
        mongoConection.isConnect = mongoose.connections[0].readyState;

        if (mongoConection.isConnect === 1) {
            console.log('Using previous connection')
            return;
        }
        await mongoose.disconnect();
    }


    await mongoose.connect(process.env.MONGO_URL  || '');
    mongoConection.isConnect = 1;
    console.log('Connected to MongoDB:, process.env.MONGO_URL')
 };

 export const disconnect = async () => {
    if (process.env.NODE_ENV === 'development') return;

    if(mongoConection.isConnect === 0) return;

    await mongoose.disconnect();
    mongoConection.isConnect = 0

    console.log('Dsiconnected of MondoDB')
 }