import express from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router()
/*router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user  younare logged in")
})
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user  younare logged in and you can delete your accont")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin   you are logged in and you can delete ALL accont")
})
*/
//UPDATE USER
router.put("/:id",verifyUser, updateUser);
//DELETE USER
router.delete("/:id",verifyUser, deleteUser);
//FIND USER BY ID
router.get("/:id",verifyUser, getUser);
//FIND ALL
router.get("/",verifyAdmin,
 getUsers);



export default router