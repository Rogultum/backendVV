const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
    permission: String,
    created_by: { type: mongoose.SchemaTypes.ObjectId, required: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);