exports.actions = [
    {
        "name": "My Action",
        "actionId": "8rtfYt",
        "active": true,
        "apply": "statusChange",
        "ifStatus": {
            "switch": {
                "status": "on"
            }
        },
        "minionId": "sWmpOU",
        "thenSet": [
            {
                "minionId": "NeONug",
                "setStatus": {
                    "switch": {
                        "status": "on"
                    }
                }
            }
        ]
    }
];