import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB connected : ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error.message.red.bold.underline);
    process.exit(1);
  }
};

export default connectDB;
