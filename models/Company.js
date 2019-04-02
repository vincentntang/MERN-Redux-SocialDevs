const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    refer: "company"
  },
  address: {
    type: String
  },
  address2: {
    type: String
  },
  companyphone: {
    type: Number
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  Zip: {
    type: Number
  },
  country: {
    type: String
  }
});

module.exports = Company = mongoose.model("company", CompanySchema);
