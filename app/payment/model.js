const mongoose = require("mongoose");

let paymentSchema = mongoose.Schema(
   {
      type: {
         type: String,
         require: [true, "Tipe pembayaran tidak boleh kosong"],
      },
      status: {
         type: String,
         enum: ["Y", "N"],
         default: "Y",
      },
      banks: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bank",
         },
      ],
   },
   { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
