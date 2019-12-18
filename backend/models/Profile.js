const { Schema, model } = require('mongoose');

const profileSchema = new Schema(
    {
        carModel: String,
        carColor: String,
        telephoneNumber: String,
        home: {
        type: [String]
        },
        departureTime: String,
        returnTime: String,
        university: {
        type: String,
        enum: ["Tecnologico de Monterrey, Santa Fe", "Universidad Iberoamericana"],
        default: "Tecnologico de Monterrey, Santa Fe"
        },
        photo: {
            type: String,
            default: "/profile_default.png",
            required: true
        },
        actualRides: [
            {
                type: Schema.Types.ObjectId,
                ref: "Ride"
            }
        ],
        rating: {
            type: Number,
            default: 0
        },
        numberRides: {
            type: Number,
            default: 0
        }
    }
)

module.exports = model('Profile', profileSchema);