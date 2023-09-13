<<<<<<< HEAD
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
=======
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
>>>>>>> e568b7eaa0a5b1f9597298167b5d205614a3041f
