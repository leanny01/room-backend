const  mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    name:{
        type:String,
        trim: true,
        unique: 'Room name must be unique',
        required: 'Room name is required'
    },
    limit:{
        type:Number,
        limit:5,
    },
    owner_id:{
        type:String,
        required:'owner\'s Id is required'
    },
    created:{
        type:Date,
        default:Date.now
    },
    members_list:{
        type:Array,
        default:["string"],
        minItems:0,
        maxItems:5,
        description:"must be an array of string and max is 5"
    },
    updated:Date
});

RoomSchema.index({members_list:'text'})

module.exports = mongoose.model("Room",RoomSchema);