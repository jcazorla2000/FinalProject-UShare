const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    fullName: String,
    email: String,
    emailConfirmed: false,
    role: {
      type: String,
      enum: ["passenger", "driver"],
      default: "passenger"
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
