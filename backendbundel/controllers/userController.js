import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js"
import { sendToken } from "../utils/sendToken.js";

export const register = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    //   const file = req.file;

    if (!name || !email || !password)
        return next(new ErrorHandler("plese fill all field", 400));

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("user already exists", 409));

    // upload file on croudnury
    user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "tme",
            url: "temid"
        },
    })

    sendToken(res, user, "Resgister Successfully", 201);

})






export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;



    if (!email || !password)
        return next(new ErrorHandler("plese fill all field", 402));

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("incorrect email or password", 401));

    const isMatch = await user.comparePassword(password);

    if (!isMatch) return next(new ErrorHandler("incorrect email or password", 401));

    sendToken(res, user, `Welcome back ${user.name}`, 200);

});

export const logout = catchAsyncError(async(req,res,next)=>{
    res.status(200).cookie("token",null ,{
        expires:new Date(Date.now()),
    }).json({
        success:true,
        massage:"logout successfully"
    });
});



export const getMyProfile = catchAsyncError(async(req,res,next)=>{
  const user = await User.findById(req.user._id);

    res.status(200).json({
        success:true,
        user,
    });
}); 



export const changePassword = catchAsyncError(async(req,res,next)=>{
  const user = await User.findById(req.user._id);

    res.status(200).json({
        success:true,
        user,
    });
}); 