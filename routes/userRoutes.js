import express from "express";
const router = express.Router();
import createcontact from "../controller/User.js";



router.post("/createcontact", createcontact)



export default router;