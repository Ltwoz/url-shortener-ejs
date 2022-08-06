import mongoose from "mongoose"
const Schema = mongoose.Schema

const ShortUrlSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        required: true,
    }
})

const ShortUrl = mongoose.model('shorturl', ShortUrlSchema)

export default ShortUrl