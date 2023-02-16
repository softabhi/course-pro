import express from 'express'
import { createCourses, getAllCourses } from '../controllers/courseController.js';

const router = express.Router();
 

// get all courses without lectures 
router.route("/courses").get(getAllCourses);

// create coures by only admin
router.route("/createcourses").post(createCourses);

export default router;