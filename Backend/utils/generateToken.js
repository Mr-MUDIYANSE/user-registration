import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_KEY, {
        expiresIn: "1d",
    });

    res.cookie("jwt", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true, //XXS
        SameSite: "strick", //CSRF
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;