import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, { dbName: "Restaurant-MERN" })
  .then(()=>{
    console.log("DB Connected Successfully");
  })
  .catch((err)=>{
    console.log("Some error occured While connecting to database:",err);
  })
};
