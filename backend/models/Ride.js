const {Schema, model} = require("mongoose")

const rideSchema = new Schema(
    {
        departureTime: String,
        rideDirection: String,
        numberPlaces: String,
        universityDirection: String,
        departureTime: String,
        coords: {
            lat: String,
            long: String
        },
        driver: {
            type: Schema.Types.ObjectId,
            ref: "User"
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
        ],
        place: {
            type: {
              type: String,
              default: "Point",
              require: true
            },
            coordinates: {
              type: [Number],
              require: true
            }
          }
    }
)

rideSchema.index({
    "place": "2dsphere"
  });

module.exports = model('Ride', rideSchema);
