import User from "../models/User.js";



//UPDATE USER

export const updateUser = async (req, res, next) => {

    try {
        const updateUser = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }

}

//DELETE HOTEL

export const deleteUser = async (req, res, next) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been Deleted")
    } catch (err) {
        next(err)
    }
}

//GET HOTEL
export const getUser = async (req, res, next) => {

    try {
        const user = await Hotel.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}
//GET ALL HOTEL
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}