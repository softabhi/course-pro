import { Course } from "../models/Course.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
// import  ErrorMidilware  from "../middlewares/Error.js";

export const getAllCourses = catchAsyncError(async(req,res,next) =>{
    const course = await Course.find().select("-lectures");
        res.status(200).json({
            success: true,
            course, 

    }); 
});

// export const createCourses = async (req ,res)=>{
   
//     const singleCourse = new Course({
//         title:req.body.title,
//         descri:req.body.descri,
//         category:req.body.category,
//         createdBy:req.body.createdBy
//     });

//     try{
//         const saveProd = await singleCourse.save();
//         res.send(saveProd);
//     }catch(error){
//         res.status(400).send(error);
//     }


//     // const {title , description , category , createdBy} = req.body;
            
//     // try{
//     //     singleCourse.save();
//     //     ({
//     //         title,
//     //         description,
//     //         category,
//     //         createdBy,
//     //         poster: {
//     //             public_id: "temp",
//     //             url: "temp",
//     //         },
//     //     });
            
//     //                 res.status(201).json({
//     //                     success:true,
//     //                     massage:"course created successfully, now you can add lecture",
//     //             }); 
//     // }catch{
//     //   res.send("something went wrong");
//     // }

// };



export const createCourses = catchAsyncError(async (req, res, next) => {


    const {title , descri , category , createdBy} = req.body;
    if(!title || !descri || !category || !createdBy) 
       return next(new ErrorHandler("please fill", 300));

    // const file = req.file;
 
    await Course.create({
        title,
        descri,
        category,
        createdBy,
        poster:{
            public_id:"temp",
            url:"temp",
        },
    });

        res.status(201).json({
            success:true,
            massage:"course created successfully, now you can add lecture",
    }); 


});






// export const createCourses =  catchAsyncError(async (req, res, next) => {

 
//     const {title , description , category , createdBy} = req.body;
//     // if(!title || !description || !category || !createdBy) 
//     //    return next(new ErrorHandler("please fill all fields", 400));

//     // const file = req.file;

//     await Course.create({
//         title,
//         description,
//         category,
//         createdBy,
//         poster:{
//             public_id:"temp",
//             url:"temp",
//         },
//     });

//         res.status(201).json({
//             success:true,
//             massage:"course created successfully, now you can add lecture",
//     }); 


// });

     
//  try {
//     const course = await Course.find();
//     res.status(200).json({
//         success: true,
//         course,
//     }); 
//  } catch (error) {
    
//  }
    // res.send("working");

