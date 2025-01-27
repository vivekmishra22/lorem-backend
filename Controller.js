const model = require('./Model');

// get api

const getuser = async (req, res) => {
    try {
        const data = await model.find()
        res.status(200).send({ data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'internal server error' })
        // Improvement: Use 500 for server errors instead of 400. 
        // 400 Bad Request: Malformed request syntax or invalid data.
    }
}


// post api 

const adduser = async (req, res) => {
    const { name, mobile, address, product } = req.body;
    try {
        const data = new model({
            name, mobile, address, product
        });
        const userdata = await data.save()
        res.send({ userdata });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}

// Delete api

const deleteuser = async (req, res) => {
    try {
        const data = await model.deleteOne({ _id: req.params.id })
        res.status(200).send({ data })
    } catch (error) {
        res.status(500).send(error)
        // res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
}

// Update api

const updateuser = async (req, res) => {
    const { name, mobile, address, product } = req.body;
    try {
        const data = await model.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    name,
                    mobile,
                    address,
                    product
                },
            }
        );

        if (data) {
            res.status(200).send({ message: "User updated found" });
        } else {
            res.status(404).send({ message: "User not found" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "internal server error" });
    }
}

// const updateuser = async (req, res) => {
//     const { name, mobile, address, product } = req.body;

//     // Validate _id
//     const userId = req.params._id;
//     if (!userId) {
//         return res.status(400).send({ message: "User ID is required" });
//     }

//     try {
//         // Attempt to update user details
//         const data = await model.updateOne(
//             { _id: userId },
//             {
//                 $set: {
//                     name,
//                     mobile,
//                     address,
//                     product,
//                 },
//             }
//         );

//         // Check the result of the update
//         if (data.matchedCount === 0) {
//             return res.status(404).send({ message: "User not found" });
//         }
//         if (data.modifiedCount === 0) {
//             return res.status(200).send({ message: "No changes made to the user" });
//         }

//         res.status(200).send({ message: "User updated successfully" });

//     } catch (error) {
//         console.error("Error updating user:", error);
//         res.status(500).send({ message: "Internal server error" });
//     }
// };


module.exports = { adduser, getuser, deleteuser, updateuser };