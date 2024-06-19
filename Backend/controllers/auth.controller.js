import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password does not match" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: "This user already exists" });
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        if (newUser) {

            // JWT Token
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            // Respons data
            res.status(200).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                status: newUser.status
            });

        } else {
            res.status(400).json({ error: "Invalid Data" });
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: error.message });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Invalid Username or Password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (user.status !== true) {
            return res.status(403).json({ error: "You are blocked. Try again later." });
        } else {
            if (!isPasswordCorrect) {
                user.failedAttempts += 1;

                if (user.failedAttempts >= 3) {
                    user.status = false;
                }

                await user.save();

                if (user.status === false) {
                    return res.status(400).json({ error: "You have exceeded the login attempts and you are now blocked." });
                }

                return res.status(403).json({ error: "Password does not match." });
            }

            user.failedAttempts = 0;
            user.status = true;
            await user.save();

            generateTokenAndSetCookie(user._id, res);

            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                status: user.status
            });
        }

    } catch (error) {
        console.log("Error in login controller ", error.message);
        res.status(500).json({ error: error.message });
    }
};
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfull" });
    } catch (error) {
        console.log("Error in logout controller ", error.message);
        res.status(500).json({ error: error.message });
    }
}