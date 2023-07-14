var express = require("express");
var router = express.Router();

const bcrypt = require("bcrypt-nodejs");
const is = require("is_js");

const Response = require("../lib/Response");
const CustomError = require("../lib/Error");
const Enum = require("../config/Enum");
const Users = require("../db/models/Users");
/* GET users listing. */
router.get("/", async function (req, res) {
  try {
    let users = await Users.find({});
    res.json(Response.successResponse(users));
  } catch (error) {
    let errorResponse = Response.errorResponse(error);
    res.status(errorResponse.code).json(errorResponse);
  }
});

router.post("/add", async function (req, res) {
  try {
    let body = req.body;

    if (!body.email)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "email field must be filled"
      );

    if (is.not.email(body.email))
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "email field wrong"
      );

    if (!body.password)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "password field must be filled"
      );

    if (body.password.length < 8)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation E",
        "Password must be > than 8"
      );

    let password = bcrypt.hashSync(body.password, bcrypt.genSaltSync(8), null);

    await Users.create({
      email: body.email,
      password: password,
      is_active: true,
      first_name: body.first_name,
      last_name: body.last_name,
    });

    res
      .status(Enum.HTTP_CODES.CREATED)
      .json(
        Response.successResponse({ success: true }, Enum.HTTP_CODES.CREATED)
      );
  } catch (error) {
    let errorResponse = Response.errorResponse(error);
    res.status(errorResponse.code).json(errorResponse);
  }
});

router.post("/update", async function (req, res) {
  try {
    let body = req.body;

    if (!body._id)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation error",
        "id is required"
      );

    let updates = {};

    if (body.password && body.password.length >= 8) {
      updates.password = bcrypt.hashSync(
        body.password,
        bcrypt.genSaltSync(8),
        null
      );
    }

    if (body.first_name) updates.first_name = body.first_name;
    if (body.last_name) updates.last_name = body.last_name;
    if (body.phone_number) updates.phone_number = body.phone_number;

    await Users.updateOne({ _id: body._id }, updates);

    res.json(Response.successResponse({ success: true }));
  } catch (error) {
    let errorResponse = Response.errorResponse(error);
    res.status(errorResponse.code).json(errorResponse);
  }
});

router.post("/delete", async function (req, res) {
  try {
    let body = req.body;

    if (!body._id)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation error",
        "id is required"
      );

    await Users.deleteOne({ _id: body._id });

    res.json(Response.successResponse({ success: true }));
  } catch (error) {
    let errorResponse = Response.errorResponse(error);
    res.status(errorResponse.code).json(errorResponse);
  }
});

module.exports = router;
