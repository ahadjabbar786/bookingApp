import express from "express";
import Hotel from "../models/Hotel.js";
import { countByType, getRooms,createHotel } from "../controllers/hotel.js";
import { deleteHotel, getHotelsCity,getHotel, getHotels,countByCity, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router =express.Router()
//create
router.post("/",verifyAdmin,createHotel)
//update
router.put("/:id",verifyAdmin,updateHotel)
//DELET 
router.delete("/:id",verifyAdmin,deleteHotel) 
 
//Get byID
router.get("/find/:id",getHotel)
//GET ALL ...HOTELS
router.get("/",getHotels) ;
router.get("/countByCity",countByCity) ;
router.get("/countByType",countByType) ;
router.get("/city",getHotelsCity)
router.get("/room/:id",getRooms)


export default router
