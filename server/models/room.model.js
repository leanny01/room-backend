import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
    name:{
        type:String,
        trim: true,
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
        default:[]
    }
});

module.exports = mongoose.model("Room",RoomSchema);