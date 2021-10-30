'use strict';

const path = require('path');
const http = require('http');
const cors = require('cors');
const express = require("express");

const oas3Tools = require('@haimkastner/oas3-tools');
const dataStore = require('./utils/dataStore');

const serverPort = process.env.PORT || 8080;

console.info(
	`
	 _______ _______ _______ _______ ______  _______ _______ 
	|   _   |   _   |   _   |   _   |   _ \\|   _   |       |
	|.  1___|.  1   |   1___|.  1   |.  |   |.  1___|.|   | |
	|.  |___|.  _   |____   |.  _   |.  |   |.  __)_'-|.  |-'
	|:  1   |:  |   |:  1   |:  |   |:  |   |:  1   | |:  |  
	|::.. . |::.|:. |::.. . |::.|:. |::.|   |::.. . | |::.|  
	'-------'--- ---'-------'--- ---'--- ---'-------' '---'  

	                     __                                            
	.--------.-----.----|  |--______.-----.-----.----.--.--.-----.----.
	|        |  _  |  __|    |______|__ --|  -__|   _|  |  |  -__|   _|
	|__|__|__|_____|____|__|__|     |_____|_____|__|  \___/|_____|__|  
																																		 

	`
);

const app = express();

/** Verify user session */
function validate(request, scopes, schema) {
	// Get the session from the header
	const session = request.headers.authentication;
	// Get session data
	const sessionData = dataStore.getSessionData(session);
	// Keep session directly on the req object
	request.session = session;
	// Verify there is data for this session, else, mean mock user not connected 
	return !!sessionData;
}

var options = {
	app,
	routing: {
		controllers: path.join(__dirname, './controllers'),
		useStubs: false
	},
	openApiValidator: {
		validateSecurity: {
			handlers: {
				userAuth  : validate,
				adminAuth  : validate,
			}
		}
	}
};

// Open cors for all, including credentials
app.use(
	cors({
		credentials: true,
		origin: (origin, callback) => {
			callback(null, true);
		},
	}),
);

// Init SWAGGER route
oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
	console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
	console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});
