import User from "../models/userModel.js"

const createcontact = async (req, res) => {
    console.log(req.body,"__________");
    let {
        name,
        email,
        subject,
        message
    } = req.body;
    try {

        let data = await User.create({
            name,
            email,
            subject,
            message
        })

        res.status(200).json({
            message: "User create successfully",
            result: data
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

export default createcontact