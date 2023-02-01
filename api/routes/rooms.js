import express from "express";
import { createRoom, deleteRoom,updateRoomavailability ,getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router =express.Router()
//create
router.post("/:hotelid", createRoom)
//update
router.put("/:id",verifyAdmin,updateRoom)
router.put("/avilability/:id",updateRoomavailability,updateRoom)
//DELET 
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom) 
 
//Get byID
router.get("/:id",getRoom)
//GET ALL ...HOTELS
router.get("/",getRooms) ;
export default router