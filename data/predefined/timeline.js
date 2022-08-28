const { Duration } = require("unitsnet-js");

exports.genTimeline = () => ([
   {
      "minionId": "sWmpOU",
      "timestamp": new Date().getTime(),
      "status": {
         "switch": {
            "status": "on"
         }
      },
      "trigger": "user",
      "user": {
         "name": "DemoUser",
         "email": "haim.kastner@gmail.com"
      }
   },
   {
      "minionId": "sWmpOU",
      "timestamp": new Date().getTime() - Duration.FromMinutes(10).Milliseconds,
      "status": {
         "switch": {
            "status": "off"
         }
      },
      "trigger": "timeout"
   },
   {
      "minionId": "sWmpOU",
      "timestamp": new Date().getTime() - Duration.FromDays(3).Milliseconds,
      "status": {
         "switch": {
            "status": "on"
         }
      },
      "trigger": "user",
      "user": {
         "name": "DemoUser",
         "email": "haim.kastner@gmail.com"
      }
   },
   {
      "minionId": "KBkEBL",
      "timestamp": new Date().getTime() - Duration.FromSeconds(30).Milliseconds,
      "status": {
         "airConditioning": {
            "fanStrength": "med",
            "mode": "cold",
            "status": "on",
            "temperature": 21
         }
      },
      "trigger": "user",
      "user": {
         "name": "DemoUser",
         "email": "haim.kastner@gmail.com"
      }
   },
   {
      "minionId": "KBkEBL",
      "timestamp": new Date().getTime() - Duration.FromHours(8).Milliseconds,
      "status": {
         "airConditioning": {
            "fanStrength": "med",
            "mode": "cold",
            "status": "off",
            "temperature": 21
         }
      },
      "trigger": "device"
   }
]);