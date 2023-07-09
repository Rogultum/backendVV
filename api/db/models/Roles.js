const mongoose = require("mongoose");
const RolePrivileges = require("./RolePrivileges");

const schema = mongoose.Schema(
  {
    role_name: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      // required: true,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Roles extends mongoose.Model {
  async remove(query) {
    if (query._id) await RolePrivileges.remove({ role_id: query._id });

    await super.remove(query);
  }
}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);
