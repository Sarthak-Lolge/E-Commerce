import  jwt  from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_TOKEN); // decoding token
    if (
      token_decode !==
      ("admin@forever.com" + "admin123")
    ) {
      return res.json({
        success: false,
        message: "Not Authorized Login",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth;
