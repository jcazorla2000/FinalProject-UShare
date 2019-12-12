const {Schema, model} = require("mongoose")

const rideSchema = new Schema(
    {
        departureTime: String,
        rideDirection: String,
        numberPlaces: String,
        universityDirection: String,
        coords: {
            lat: String,
            long: String
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
