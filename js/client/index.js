
// const server = process.env.HEXAGON_SERVER;

const ioClient = io('http://localhost:3000');

ioClient.on("init", (msg) => console.info(msg));

function startClient()
{
	console.log("hello");	
}

startClient()
