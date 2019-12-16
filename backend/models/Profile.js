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
            default: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiSqqzlrqnmAhW1JzQIHVRbAYIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pinclipart.com%2Fpindetail%2FoRmRRm_user-profile-default-image-png-clipart%2F&psig=AOvVaw37Ia5G5O13cB1GheL6yX39&ust=1576008350565030",
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