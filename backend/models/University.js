const {Schema, model} = require("mongoose")

const universitySchema = new Schema(
    {
        stundents: {
            drivers: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Driver"
                }
            ],
            users: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "User"
                }
            ]
        },
        rides: [
            {
                type: Schema.Types.ObjectId,
                ref: "Ride"
            }
        ],
        location: {
            Type: [String]
        }
    }
)