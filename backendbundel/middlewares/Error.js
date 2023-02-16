const ErrorMidilware = (err, req, res, next) => {

err.statusCode = err.statusCode || 500;

err.massage = err.massage || "technical server error"; 

// console.log(hello);

       res.status(err.statusCode).json({
        success: "abhi",
        massage: err.massage,
       });
};

export default ErrorMidilware;