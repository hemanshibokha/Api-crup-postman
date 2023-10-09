const registerSchema = require('../models/adminschema');
const jwt = require('jsonwebtoken');
const insertApi = async (req, res) => {
    try {
        const { name, email, password, gender, city } = req.body;
        const Insert = await registerSchema.create({
            name: name,
            email: email,
            password: password,
            gender: gender,
            city: city
        })
        if (Insert) {
            return res.json({ message: "User Registered", status: 1 });
        }
        else {
            return res.json({ message: "User Not Registered", status: 0 });
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

const viewApi = async (req, res) => {
    try {
        let View = await registerSchema.find({});
        if (View) {
            return res.json({ message: View, status: 1 });
        }
        else {
            return res.json({ message: "Record Not View", status: 0 });
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

const deleteApi = async (req, res) => {
    try {
        let id = req.query.id;
        let deleteRecord = await registerSchema.findByIdAndDelete(id);
        if (deleteRecord) {
            return res.json({ message: "Record Delete", status: 1 });
        }
        else {
            return res.json({ message: "Record Not Delete", status0: 0 });
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

const updateApi = async (req, res) => {
    try {
        let id = req.query.id;
        let UpdateRecord = await registerSchema.findByIdAndUpdate(id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            city: req.body.city
        });
        if (UpdateRecord) {
            return res.json({ message: "Record Update", status: 1 });
        }
        else {
            return res.json({ message: "Record Not Update", status: 0 });
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

const loginApi = async (req, res) => {
    // step - 1 (jate codeing)
    try{
        const {email,password} = req.body;
        const UserLogin = await registerSchema.findOne({email : email});
        if(!UserLogin || UserLogin.password != password){
            return res.json({ messege: "Email and Password not valid", status: 0 });
        }
        else{
            const Token = jwt.sign({payload : UserLogin}, 'hemanshi', {expiresIn : '1hr'})
            return res.json({token : Token});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    insertApi,
    viewApi,
    deleteApi,
    updateApi,
    loginApi
}