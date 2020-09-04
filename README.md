
## Installation



This application runs on node version `13.12.0` and npm version `6.14.4`

-  clone the app on your computer
-  `cd` into the directory and run `npm install`
-  run `npm run start` , the app should run on port 3000


## Under the hood

### User management



- `/api/` -> Test run (welcome message)
- `/api/users `(no auth required)-> return a list of users (no auth required)
- `/api/users/:userId` -> (no auth required)-> take a username return user maching the query
- `/signin` -> takes username and password
- `/signup` -> takes username password
- `/updateUser` (auth required)
- `/deleteUser` (auth required)


### Room management


- `/api/rooms` (get : no auth required) -> returns a list of existing room(s)
- `/api/rooms` (post : no auth required) -> create a new room
- `/api/rooms/:roomId` (get : auth required) -> View a single room details
- `/api/rooms/changeOwner/:roomId/:userId` (put : auth required) -> Change room owner
- `/api/room/joinRoom/:roomId/:userId` (put : auth required) -> join a room
- `/apit/room/leaveRoom/:roomId/:userId` (put : auth required) -> leave a room
- `/api/room/getUserRooms/:userId` (get : no auth required) -> load all room where a user x can be found.

### Todo

- [ ] Edit rooms
- [ ] Delete room
- [ ] add test
