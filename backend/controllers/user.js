const { validateEmail, checkUserName } = require("../helpers/validation");
const User = require("../model/user")
const { hashSync, genSaltSync, compare } = require('bcrypt');
const { generateToken } = require("../helpers/tokens");
const { sendVerificationEmail } = require("../helpers/mailer");
const { message } = require("../messageText");
const jwt = require('jsonwebtoken');
const { createError } = require("../helpers/error");

exports.register = async (req, res, next) => {
    try {
        console.log("email ---", req.body)
        if (!validateEmail(req.body.email)) {
            return res.status(400).send({ message: "Invalid Email Id" })
        }
        const check = await User.findOne({ email: req.body.email })
        if (check) {
            return res.status(400).send({ message: "Email already exist! try with another email id" })
        }
        console.log("password", req.body.password)
        const hashedPassword = await hashSync(req.body.password, genSaltSync(12))
        const tempUserName = req.body.firstName + req.body.lastName
        console.log("tempUserName---", tempUserName)
        let newUserName = await checkUserName(tempUserName)
        const user = new User({ ...req.body, userName: newUserName, password: hashedPassword })

        const savedUser = await user.save();
        const emailVerificationToken = generateToken({ id: savedUser._id.toString() }, "30m")
        const token = generateToken({ id: savedUser._id.toString() }, "7d")
        const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`
        sendVerificationEmail(savedUser.email, savedUser.firstName, url)
        savedUser.password = undefined
        res.status(201).send({
            success: true,
            data: savedUser,
            token,
            message: message.userRegistration
        })
    } catch (err) {
        next(err)
    }
}

exports.verifyEmail = async (req, res, next) => {
    try {
        const { token } = req.body
        const user = jwt.verify(token, process.env.SECRET_KEY)
        const check = await User.findOne({ _id: user.id })
        if (check && check.verified) {
            return res.status(400).send({
                message: message.alreadyVerified
            })
        }
        await User.findByIdAndUpdate(user.id, { verified: true });
        res.status(200).send({
            message: message.verified
        })
        console.log(token)
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { username } = req.body
        const user = await User.findOne({ $or: [{ "userName": username }, { "email": username }] })
        if (!user) return next(createError(404, "User not found!"))
        const isPasswordCorrect = await compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong password"))
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
        savedUser.password = undefined
        res.status(201).send({
            success: true,
            data: savedUser,
            token,
            message: message.userRegistration
        })
    } catch (err) {
        next(err)
    }
}