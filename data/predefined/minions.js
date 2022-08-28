exports.minions = [
    {
        "minionStatus": {
            "switch": {
                "status": "on"
            }
        },
        "minionType": "switch",
        "name": "Switch demo",
        "device": {
            "brand": "mock",
            "model": "switch demo",
            "pysicalDevice": {
                "mac": "72vumvls06",
                "ip": "192.168.2.10",
                "vendor": "ASUSTek COMPUTER INC.",
                "name": "Some device"
            }
        },
        "minionId": "sWmpOU",
        "isProperlyCommunicated": true,
        "calibration": {
            "calibrationMode": "AUTO",
            "calibrationCycleMinutes": 10
        },
        "minionAutoTurnOffMS": 60000
    },
    {
        "minionStatus": {

        },
        "minionType": "switch",
        "name": "Switch 2",
        "device": {
            "brand": "broadlink",
            "model": "SP2",
            "pysicalDevice": {
                "mac": "tr5eu8kgqq",
                "ip": "192.168.2.19",
                "vendor": "PEGATRON CORPORATION",
                "name": "Router"
            }
        },
        "minionId": "NeONug",
        "isProperlyCommunicated": false,
        "minionAutoTurnOffMS": 60000
    },
    {
        "minionStatus": {
            "light": {
                "brightness": 50,
                "status": "on"
            }
        },
        "minionType": "light",
        "name": "Lamp demo",
        "device": {
            "brand": "mock",
            "model": "Light demo",
            "pysicalDevice": {
                "mac": "0tpktlf1e8",
                "ip": "",
                "vendor": "Xiaomi Communications Co Ltd",
                "name": ""
            }
        },
        "minionId": "ymiR8d",
        "isProperlyCommunicated": true,
        "calibration": {
            "calibrationMode": "LOCK_ON",
            "calibrationCycleMinutes": 0
        },
        "room": "Bedroom"
    },
    {
        "minionStatus": {
            "temperatureLight": {
                "brightness": 50,
                "status": "on",
                "temperature": 85
            }
        },
        "minionType": "temperatureLight",
        "name": "Lamp 2",
        "device": {
            "brand": "mock",
            "model": "Temperature Light demo",
            "pysicalDevice": {
                "mac": "r54kfph8rg",
                "ip": "192.168.2.19",
                "vendor": "PEGATRON CORPORATION",
                "name": "Router"
            }
        },
        "minionId": "Eu50vx",
        "isProperlyCommunicated": true,
        "room": "Living room"
    },
    {
        "minionStatus": {
            "colorLight": {
                "brightness": 50,
                "status": "on",
                "temperature": 85,
                "blue": 120,
                "green": 123,
                "red": 143
            }
        },
        "minionType": "colorLight",
        "name": "Colorful lamp",
        "device": {
            "brand": "mock",
            "model": "Color Light demo",
            "pysicalDevice": {
                "mac": "5ip6v4mhl7",
                "ip": "192.168.2.19",
                "vendor": "PEGATRON CORPORATION",
                "name": "Router"
            }
        },
        "minionId": "4QbJva",
        "isProperlyCommunicated": true,
        "room": "Children's room",
        "minionAutoTurnOffMS": 0,
        "calibration": {
            "calibrationMode": "AUTO",
            "calibrationCycleMinutes": 0
        }
    },
    {
        "minionStatus": {
            "roller": {
                "status": "on",
                "direction": "up"
            }
        },
        "minionType": "roller",
        "name": "Roller demo",
        "device": {
            "brand": "mock",
            "model": "Roller demo",
            "pysicalDevice": {
                "mac": "snvnq0rqcb",
                "ip": "192.168.2.19",
                "vendor": "PEGATRON CORPORATION",
                "name": "Router"
            }
        },
        "minionId": "ZQS0Ly",
        "isProperlyCommunicated": true,
        "room": "Living room",
        "minionAutoTurnOffMS": 0
    },
    {
        "minionStatus": {
            "cleaner": {
                "fanSpeed": "high",
                "mode": "dock",
                "status": "off"
            }
        },
        "minionType": "cleaner",
        "name": "Clean robot",
        "device": {
            "brand": "miio",
            "model": "Robot vacuum",
            "pysicalDevice": {
                "mac": "n2lpp43y6y",
                "ip": "192.168.2.22",
                "vendor": "Cadmus Computer Systems",
                "name": "PC 2"
            }
        },
        "minionId": "FDVOqW",
        "isProperlyCommunicated": false
    },
    {
        "minionStatus": {
            "toggle": {
                "status": "off"
            }
        },
        "minionType": "toggle",
        "name": "Toggle demo",
        "device": {
            "brand": "mock",
            "model": "RF toggle demo",
            "pysicalDevice": {
                "mac": "qze7gockzg",
                "ip": "192.168.2.19",
                "vendor": "PEGATRON CORPORATION",
                "name": "Router"
            }
        },
        "minionId": "NxNped",
        "isProperlyCommunicated": true,
        "calibration": {
            "calibrationMode": "SHABBAT",
            "calibrationCycleMinutes": 10
        },
        "minionAutoTurnOffMS": 60000
    },
    {
        "minionStatus": {
            "airConditioning": {
                "fanStrength": "med",
                "mode": "cold",
                "status": "on",
                "temperature": 21
            }
        },
        "minionType": "airConditioning",
        "name": "Air conditioning demo",
        "device": {
            "brand": "mock",
            "model": "ac demo",
            "pysicalDevice": {
                "mac": "av2it6l9uw",
                "ip": "192.168.2.19",
                "vendor": "PEGATRON CORPORATION",
                "name": "Router"
            }
        },
        "minionId": "KBkEBL",
        "isProperlyCommunicated": true,
        "room": "",
        "minionAutoTurnOffMS": 0,
        "calibration": {
            "calibrationMode": "LOCK_OFF",
            "calibrationCycleMinutes": 0
        }
    }
];