const mongoose = require("mongoose");

const userPreferencesSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  preferences: {
    type: Object,
    required: true,
    default: {}
  }
});

// define nested preferences explicitly
userPreferencesSchema.add({
  preferences: {
    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light"
    },
    language: {
      type: String,
      default: "en"
    },
    notifications: {
      email: {
        type: Boolean,
        default: true
      },
      sms: {
        type: Boolean,
        default: false
      }
    }
  }
});

const UserPreferences = mongoose.model("UserPreferences", userPreferencesSchema);

module.exports = UserPreferences;
