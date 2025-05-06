import mongoose from 'mongoose'

const { Schema } = mongoose;

const discordSchema = new Schema({
        channelName: String,
        conversation: [
            {
                message: String,
                timestamp: String,
                user: {
                    displayName: String,
                    email: String,
                    photo: String,
                    uid: String
                }
            }
        ]
    });

    export default mongoose.model('conversations', discordSchema);