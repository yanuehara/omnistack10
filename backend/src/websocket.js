const socketio = require('socket.io');
const parseStringToArray = require('./utils/parseStringToArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];


exports.setupWebSocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        const { latitude, longitude, techs } = socket.handshake.query;
        const techsArray = parseStringToArray(techs);

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: techsArray
        });
    });
}

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        const distance = calculateDistance(coordinates, connection.coordinates);

        return distance < 10
            && connection.techs.some(item => techs.includes(item));
    });
}

exports.sendMessage = (to, message, data) => {
    to.forEach(client => {
        io.to(client.id).emit(message, data);
    });
}