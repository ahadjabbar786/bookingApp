import mongoose from "mongoose";

/*const HotelSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      distance: {
        type: String,
        required: true,
      },
      photos: {
        type: [String],
      },
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      rooms: {
        type: [String],
      },
      cheapestPrice: {
        type: Number,
        required: true,
      },
      featured: {
        type: Boolean,
        default: false,
      },
    });*/
    //MONGO_DB= mongodb+srv://Ahadjk:12345@cluster0.w7qge8c.mongodb.net/booking?retryWrites=true&w=majority
const HotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    type:String,
    desc: String,
    rooms:[String],
    cheapestPrice: Number,
    distance:Number,
    title: [String],
    photos: [String],
    rating :{
        type: Number,
        min: [0, 'Must be at least 6, got {VALUE}'],
        max: 5
      },
   
    featured: Boolean,




})
export default mongoose.model("Hotel", HotelSchema)