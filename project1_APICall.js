// Get treehouse points from treehouse api for a userName

function createMessage(username, badgeCount, points) {
    console.log(
        `${username} has ${badgeCount} badges and ${points} points in Total.`);
}

// Step ONE: Connect to the API ("https://teamtreehouse.com/username.json")
// Step TWO: Read the data and parse the json
// Step THREE: Output the data
function getInformation(username) {
    const https = require("https");
    const url = "https://teamtreehouse.com/" + username + ".json";
    const request = https.get(url, response => {
        let body = "";
        response.on("data", (data) => {
            body += data.toString();
        });

        response.on("end", () => {
            const jsonBody = JSON.parse(body);
            const badgeCount = jsonBody.badges.length;
            const points = jsonBody.points.total;
            createMessage(username, badgeCount, points);
        });
    });
    request.on("error", error => console.log(error.message));
}

const users = process.argv.slice(2);
users.forEach(getInformation);
