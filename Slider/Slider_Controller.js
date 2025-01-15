const model = require('./Slider_Model');

// get api

const getSlider = async (req, res) => {
    try {
        const data = await model.find()
        res.status(200).send({ data })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'internal server error' })
    }
}


// post api 

const addSlider = async (req, res) => {
    const { sliderHeading, sliderDescription } = req.body;
    try {
        const data = new model({
            sliderHeading, sliderDescription
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

const deleteSlider = async (req, res) => {
    try {
        const data = await model.deleteOne({ _id: req.params.id })
        res.status(200).send({ data })
    } catch (error) {
        res.status(500).send(error)
    }
}

// Update api

const updateSlider = async (req, res) => {
    const { sliderHeading, sliderDescription } = req.body;
    try {
        const data = await model.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    sliderHeading, 
                    sliderDescription
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

module.exports = { addSlider, getSlider, deleteSlider, updateSlider };