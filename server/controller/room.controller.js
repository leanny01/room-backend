const Room = require("./../models/room.model");
const errorHandler = require("../helpers/dbErrorHandler");

const welcome = async (req, res) => {
  try {
    return res.status("200").json({
      message: "Welcome, all good!",
    });
  } catch (err) {
    return res.status("401").json({
      error: "could not sign in",
    });
  }
};

const roomByID = async (req, res, next, id) => {

  try {
    let room = await Room.findById(id);

    if (!room) {
      return res.status("400").json({
        error: "Room not found",
      });
    }

    req.room = room;
    next();
  } catch (err) {
    return res.status("400").json({ error: "Could not retrieve the room" });
  }
};
const read = (req,res)=>{
    res.json(req.room)
}

const create = async (req, res) => {
  const room = new Room(req.body);
  try {
    await room.save();
    return res.status(200).json({
      message: "Successfully created a new room!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const update = async (req, res) => {
  try {
    let room = req.room;
    room = extend(room, req.body);
    room.updated = Date.now();
    await room.save();

    res.json(room);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    let rooms = await Room.find({});
    res.json(rooms);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const changeOwner = async (req, res) => {
  try {

    const room = req.room;
    room.updated = Date.now();
    room.owner_id = req.params.userId;

    await room.save();
    res.json(room);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const joinRoom = async (req, res) => {
  try {


    const room = req.room;
    const userToAdd = req.params.userId;

    room.updated = Date.now();
    room.members_list = [...room.members_list, userToAdd];

    await room.save();
    res.json(room);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const leaveRoom = async (req, res) => {
  try {
    const room = req.room;
    room.updated = Date.now();
    const remainingMembers = room.members_list.filter(
      (id) => id !== req.params.userId
    );
    room.members_list = [...remainingMembers];

    await room.save();
    res.json(room);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const getUserRooms = async (req, res) => {
  try {

    const rooms = await Room.find({ members_list: req.params.userId });

    if (!rooms) {
      return res.status("400").json({
        error: "Room not found",
      });
    }

    res.json(rooms);

  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = {
  welcome,
  read,
  roomByID,
  create,
  update,
  changeOwner,
  joinRoom,
  leaveRoom,
  getUserRooms,
  list,
};
