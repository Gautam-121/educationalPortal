const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({

    coursesName : {
        type : String,
        required : [true , "CourseName should not be empty"],
        trim : true
    },
    cover: { 

        public_id : {
            type:String,
            required:true
        },
        url: {
            type:String,
            required:true
        }
    },
    Instructor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "istructor"
    },
    totalTime: {
        type : String,
        required : [true , "TotalTime Should not be empty"]
    },
    priceAll: {
        type : String,
        required : [true , "PriceAll should not be empty"]
    },
    pricePer: {
        type : String,
        required : [true , "PricePer should not be empty"]
    },
    noOfLectures : {
        type:Number,
        required:[true , "noOfLectures should not be empty"]
    },
    noOfHours:{
        type:Number,
        required:[true , "noOfHours should not be empty"]
    },
    createdAt : {
        type :Date,
        default : Date.now()
    }
})

module.exports = mongoose.model("course" , courseSchema)