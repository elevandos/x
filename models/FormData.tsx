import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FormDataSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  privacyPolicy: {
    type: Boolean,
  },
});

export default mongoose.models.FormData ||
  mongoose.model("FormData", FormDataSchema);
