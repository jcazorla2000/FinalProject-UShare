const {Schema, model} = require("mongoose")

const rideSchema = new Schema(
    {
        schedule: {
            departure: String,
            arrival: String
        },
        location: {
            departure: {
                coordinates: [String],

            },
            arrival: String
        },
        driver: {
            type: Schema.Types.ObjectId,
            ref: "Driver"
        },
        passengers: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        pendingPassengers: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    }
)

module.exports = model('Ride', rideSchema);
