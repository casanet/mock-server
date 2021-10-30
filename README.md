# Casanet Mock Server 


This service is used to mock [Casanet server](https://github.com/casanet/casanet-server) APIs based on on-demand logon.

The behavior is when any user login, the mock server generates a new session and clones predefined data set, then the user can use this session to edit and play with the session data till logout or data TTL (about 10 minutes).

The API generate based on the [casanet server spec](https://github.com/casanet/casanet-server/blob/development/backend/src/swagger.json) by Swagger gen to `nodejs-server`.

## Overview

This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub.

### Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
