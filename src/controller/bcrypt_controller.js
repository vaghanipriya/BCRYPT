const bcrypt = require("bcrypt");

const create_bcrypt = async (req, res) => {
    try {
        const password = req.body.password;
        const hash_pass = await bcrypt.hash(password, 5);
        if (!hash_pass) {
            throw new Error("Wrong........!!!");
        }
        res.status(200).json({
            success: true,
            data: hash_pass,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const hash_check = async (req, res) => {
    try {
        const try_password = req.params.password;
        const hash_to_check_with = "$2b$05$HGwWLjh9zOyPMikws8bXW.uD5.kihmulaoXNjpZ3IyPSE/foAaGVO";
        const result = await bcrypt.compare(try_password,hash_to_check_with)
        if (!result) {
            throw new Error("Wrong........!!!");
        }
        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    create_bcrypt,
    hash_check,
};
