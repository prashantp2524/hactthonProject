import userModel from "../models/user.model.js";
import responseHandler from "../handlers/response.handler.js";
import jsonwebtoken from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await userModel.findOne({ email });

    if (checkUser) {
      return responseHandler.badrequest(res, "user already exists");
    }

    const user = new userModel();

    user.name = name;
    user.email = email;
    user.setPassword(password);

    await user.save();
    responseHandler.created(res, {
      user,
    });
    // console.log(user);
  } catch (error) {
    responseHandler.error(res);
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel
      .findOne({ username })
      .select("username password salt id displayName");

    if (!user) return responseHandler.badrequest(res, "User not exist");

    if (!user.validPassword(password))
      return responseHandler.badrequest(res, "Wrong password");

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    user.password = undefined;
    user.salt = undefined;

    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user.id,
    });
  } catch {
    responseHandler.error(res);
  }
};

const updatePassword = async (re1, res) => {
  try {
    const { password, newPassword } = req.body;

    const user = await userModel
      .findById(req.user.id)
      .select("password id  salt");

    if (!user) return responseHandler.unauthorize(res);

    if (!user.validPassword(password))
      return responseHandler.badrequest(res, "Wrong password");

    user.setPassword(newPassword);

    await user.save();

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

const getInfo = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);

    if (!user) return responseHandler.notfound(res);

    responseHandler.ok(res, user);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { signup, signin, updatePassword, getInfo };
