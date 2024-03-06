import jwt from "jsonwebtoken";
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days milliseconds format
    httpOnly: true, // cookie cannot be accessed by client side script
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production" ? true : false,
  });
};
export default generateTokenAndSetCookie;
