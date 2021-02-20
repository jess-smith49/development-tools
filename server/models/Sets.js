const {Schema, model} = require('mongoose')
const cardSchema = require('./Card');

const SetsSchema = new Schema(
    {
        setName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        cards: [cardSchema]
    }
)

const Sets = model('Sets', SetsSchema);
module.exports = Sets;