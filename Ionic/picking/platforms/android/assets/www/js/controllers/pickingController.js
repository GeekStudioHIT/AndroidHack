angular.module('starter.pickingController', [])
.controller('pickingController', function($scope, $state) {
    $scope.noNeedScan = function() {
        console.log("no scan");
        $state.go("app.pickingFinished");
    };
    $scope.cannotPicking = function(){
        console.log("cannot picking");
        $state.go("app.pickingFinished");
    };
    $scope.click = function() {
        console.log("to page buckets");
        $state.go("app.buckets");
    };
})
.directive("bucketabstractcanvas", function() {
    // 必须为只有一面的数据
    var bucketsData =
        [
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091906884,
                "lastUpdatedApp": "BucketManager:215",
                "lastUpdatedDate": 1468784165345,
                "customerID": 2,
                "bucketID": "65",
                "bucketTypeID": 3,
                "state": "STATIC",
                "waypointID": 524291,
                "driveunitID": "0",
                "topFace": 4,
                "bucketType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873644,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1433941604479,
                    "bucketTypeID": 3,
                    "name": "T250",
                    "width": 90,
                    "availableWidth": 80,
                    "height": 250,
                    "availableHeight": 210,
                    "layout": "2(1-42-37, 2-42-37,3-42-37,4-42-37,5-42-37);4(1-42-37,2-42-37,3-42-37,4-42-37,5-42-37)"
                },
                "bucketSlots": [

                ]
            },

            {
                "createdUser":"DataLoad",
                "createdApp":"DBDebugForL",
                "createdDate":1422091907503,
                "lastUpdatedApp":"JobManager:1194",
                "lastUpdatedDate":1434685772638,
                "customerID":2,
                "bucketSlotID":"65-2-1-1",
                "bucketID":"65",
                "bucketLayer":1,
                "bucketFaceNum":2,
                "bucketOffset":0,
                "bucketVOffset":0,
                "bucketSlotTypeID":8,
                "bucketSlotType":{
                    "createdUser":"haixian",
                    "createdApp":"Data_Init",
                    "createdDate":1422091873645,
                    "lastUpdatedUser":"haixian",
                    "lastUpdatedApp":"Data_Init",
                    "lastUpdatedDate":1449839654393,
                    "bucketSlotTypeID":8,
                    "name":"T12H",
                    "length":45,
                    "width":40,
                    "height":36,
                    "defaultCapacity":10
                },
                "enabled":true,
                "priority":5,
                "bucketArea":"PICKING",
                "storages":[],
                "actualQuantity":0,
                "stationCache":false
            },

            {
                "createdUser":"DataLoad",
                "createdApp":"DBDebugForL",
                "createdDate":1422091907504,
                "lastUpdatedApp":"JobManager:1345",
                "lastUpdatedDate":1434685772638,
                "customerID":2,
                "bucketSlotID":"65-2-2-1",
                "bucketID":"65",
                "bucketLayer":2,
                "bucketFaceNum":2,
                "bucketOffset":0,
                "bucketVOffset":0,
                "bucketSlotTypeID":8,
                "bucketSlotType":{
                    "createdUser":"haixian",
                    "createdApp":"Data_Init",
                    "createdDate":1422091873645,
                    "lastUpdatedUser":"haixian",
                    "lastUpdatedApp":"Data_Init",
                    "lastUpdatedDate":1449839654393,
                    "bucketSlotTypeID":8,
                    "name":"T12H",
                    "length":45,
                    "width":40,
                    "height":36,
                    "defaultCapacity":10
                },
                "enabled":true,
                "priority":5,
                "bucketArea":"PICKING",
                "storages":[],
                "actualQuantity":0,
                "stationCache":false
            },

            {
                "createdUser":"DataLoad",
                "createdApp":"DBDebugForL",
                "createdDate":1422091907504,
                "lastUpdatedApp":"JobManager:1345",
                "lastUpdatedDate":1434685772638,
                "customerID":2,
                "bucketSlotID":"65-2-2-2",
                "bucketID":"65",
                "bucketLayer":2,
                "bucketFaceNum":2,
                "bucketOffset":40,
                "bucketVOffset":0,
                "bucketSlotTypeID":8,
                "bucketSlotType":{
                    "createdUser":"haixian",
                    "createdApp":"Data_Init",
                    "createdDate":1422091873645,
                    "lastUpdatedUser":"haixian",
                    "lastUpdatedApp":"Data_Init",
                    "lastUpdatedDate":1449839654393,
                    "bucketSlotTypeID":8,
                    "name":"T12H",
                    "length":45,
                    "width":40,
                    "height":36,
                    "defaultCapacity":10
                },
                "enabled":true,
                "priority":5,
                "bucketArea":"PICKING",
                "storages":[],
                "actualQuantity":0,
                "stationCache":false
            },
            {
                "createdUser":"DataLoad",
                "createdApp":"DBDebugForL",
                "createdDate":1422091907504,
                "lastUpdatedApp":"StorageManager:165",
                "lastUpdatedDate":1434685772638,
                "customerID":2,
                "bucketSlotID":"65-2-3-1",
                "bucketID":"65",
                "bucketLayer":3,
                "bucketFaceNum":2,
                "bucketOffset":0,
                "bucketVOffset":0,
                "bucketSlotTypeID":8,
                "bucketSlotType":{
                    "createdUser":"haixian",
                    "createdApp":"Data_Init",
                    "createdDate":1422091873645,
                    "lastUpdatedUser":"haixian",
                    "lastUpdatedApp":"Data_Init",
                    "lastUpdatedDate":1449839654393,
                    "bucketSlotTypeID":8,
                    "name":"T12H",
                    "length":45,
                    "width":40,
                    "height":36,
                    "defaultCapacity":10
                },
                "enabled":true,
                "priority":5,
                "bucketArea":"PICKING",
                "storages":[],
                "actualQuantity":0,
                "stationCache":false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907505,
                "lastUpdatedApp": "JobManager:1265",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-2-3-2",
                "bucketID": "65",
                "bucketLayer": 3,
                "bucketFaceNum": 2,
                "bucketOffset": 40,
                "bucketVOffset": 0,
                "skuID": "DZHPFSU143220M5103",
                "quantity": 4,
                "lockQuantity": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "sku": {
                    "createdUser": "DataLoad",
                    "createdApp": "DBDebugForL",
                    "createdDate": 1422091900429,
                    "lastUpdatedUser": "DataLoad",
                    "lastUpdatedApp": "DBDebugForL",
                    "lastUpdatedDate": 1422091900429,
                    "customerID": 2,
                    "skuID": "DZHPFSU143220M5103",
                    "skuNumber": "PFSU143220M5103",
                    "externalID": "PFSU143220M5103",
                    "name": "男式家居服套装 大红 L",
                    "weight": 660,
                    "image": "PFSU143220M5103.jpg",
                    "imageChanged": false,
                    "virtual": false,
                    "canAdd": false,
                    "enableBatch": false,
                    "breakable": false,
                    "heavy": false,
                    "isLpn": false,
                    "autoSetCapacity": false,
                    "packingQty": 0,
                    "isSpecialShape": false,
                    "eans": [
                        "PFSU143220M5103"
                    ]
                },
                "storages": [
                    {
                        "lastUpdatedApp": "SlotQuantityChangeExecutor:55",
                        "lastUpdatedDate": 1468622369812,
                        "bucketSlotID": "65-2-3-2",
                        "skuID": "DZHPFSU143220M5103",
                        "quantity": 4,
                        "lockQuantity": 0,
                        "sku": {
                            "createdUser": "DataLoad",
                            "createdApp": "DBDebugForL",
                            "createdDate": 1422091900429,
                            "lastUpdatedUser": "DataLoad",
                            "lastUpdatedApp": "DBDebugForL",
                            "lastUpdatedDate": 1422091900429,
                            "customerID": 2,
                            "skuID": "DZHPFSU143220M5103",
                            "skuNumber": "PFSU143220M5103",
                            "name": "男式家居服套装 大红 L",
                            "quantity": 4,
                            "weight": 660,
                            "image": "PFSU143220M5103.jpg",
                            "imageChanged": false,
                            "virtual": false,
                            "canAdd": false,
                            "enableBatch": false,
                            "breakable": false,
                            "heavy": false,
                            "isLpn": false,
                            "autoSetCapacity": false,
                            "packingQty": 0,
                            "isSpecialShape": false,
                            "eans": [
                                "PFSU143220M5103"
                            ]
                        }
                    }
                ],
                "actualQuantity": 4,
                "stationCache": false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907505,
                "lastUpdatedApp": "JobManager:1345",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-2-4-1",
                "bucketID": "65",
                "bucketLayer": 4,
                "bucketFaceNum": 2,
                "bucketOffset": 0,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907506,
                "lastUpdatedApp": "StorageManager:181",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-2-4-2",
                "bucketID": "65",
                "bucketLayer": 4,
                "bucketFaceNum": 2,
                "bucketOffset": 40,
                "bucketVOffset": 0,
                "skuID": "DZHPFDJ144546L8003",
                "quantity": 2,
                "lockQuantity": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "sku": {
                    "createdUser": "DataLoad",
                    "createdApp": "DBDebugForL",
                    "createdDate": 1422091900085,
                    "lastUpdatedUser": "DataLoad",
                    "lastUpdatedApp": "DBDebugForL",
                    "lastUpdatedDate": 1425904506120,
                    "customerID": 2,
                    "skuID": "DZHPFDJ144546L8003",
                    "skuNumber": "PFDJ144546L8003",
                    "externalID": "PFDJ144546L8003",
                    "name": "PFDJ144546L8003",
                    "image": "PFDJ144546L8003.jpg",
                    "imageChanged": false,
                    "virtual": false,
                    "canAdd": false,
                    "enableBatch": false,
                    "breakable": false,
                    "heavy": false,
                    "isLpn": false,
                    "autoSetCapacity": false,
                    "packingQty": 0,
                    "isSpecialShape": false,
                    "eans": [
                        "PFDJ144546L8003"
                    ]
                },
                "storages": [
                    {
                        "lastUpdatedDate": 1468622369812,
                        "bucketSlotID": "65-2-4-2",
                        "skuID": "DZHPFDJ144546L8003",
                        "quantity": 2,
                        "lockQuantity": 0,
                        "sku": {
                            "createdUser": "DataLoad",
                            "createdApp": "DBDebugForL",
                            "createdDate": 1422091900085,
                            "lastUpdatedUser": "DataLoad",
                            "lastUpdatedApp": "DBDebugForL",
                            "lastUpdatedDate": 1425904506120,
                            "customerID": 2,
                            "skuID": "DZHPFDJ144546L8003",
                            "skuNumber": "PFDJ144546L8003",
                            "name": "PFDJ144546L8003",
                            "quantity": 2,
                            "image": "PFDJ144546L8003.jpg",
                            "imageChanged": false,
                            "virtual": false,
                            "canAdd": false,
                            "enableBatch": false,
                            "breakable": false,
                            "heavy": false,
                            "isLpn": false,
                            "autoSetCapacity": false,
                            "packingQty": 0,
                            "isSpecialShape": false,
                            "eans": [
                                "PFDJ144546L8003"
                            ]
                        }
                    }
                ],
                "actualQuantity": 2,
                "stationCache": false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907506,
                "lastUpdatedApp": "JobManager:1345",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-4-1-1",
                "bucketID": "65",
                "bucketLayer": 1,
                "bucketFaceNum": 4,
                "bucketOffset": 0,
                "bucketVOffset": 0,
                "skuID": "DZHPFPT143338L5204",
                "quantity": 2,
                "lockQuantity": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "sku": {
                    "createdUser": "DataLoad",
                    "createdApp": "DBDebugForL",
                    "createdDate": 1422091900245,
                    "lastUpdatedUser": "DataLoad",
                    "lastUpdatedApp": "DBDebugForL",
                    "lastUpdatedDate": 1422091900245,
                    "customerID": 2,
                    "skuID": "DZHPFPT143338L5204",
                    "skuNumber": "PFPT143338L5204",
                    "externalID": "PFPT143338L5204",
                    "name": "女式磨毛针织长裤 橙红 XL",
                    "weight": 570,
                    "image": "PFPT143338L5204.jpg",
                    "imageChanged": false,
                    "virtual": false,
                    "canAdd": false,
                    "enableBatch": false,
                    "breakable": false,
                    "heavy": false,
                    "isLpn": false,
                    "autoSetCapacity": false,
                    "packingQty": 0,
                    "isSpecialShape": false,
                    "eans": [
                        "PFPT143338L5204"
                    ]
                },
                "storages": [
                    {
                        "lastUpdatedApp": "SlotQuantityChangeExecutor:55",
                        "lastUpdatedDate": 1468622369812,
                        "bucketSlotID": "65-4-1-1",
                        "skuID": "DZHPFPT143338L5204",
                        "quantity": 2,
                        "lockQuantity": 0,
                        "sku": {
                            "createdUser": "DataLoad",
                            "createdApp": "DBDebugForL",
                            "createdDate": 1422091900245,
                            "lastUpdatedUser": "DataLoad",
                            "lastUpdatedApp": "DBDebugForL",
                            "lastUpdatedDate": 1422091900245,
                            "customerID": 2,
                            "skuID": "DZHPFPT143338L5204",
                            "skuNumber": "PFPT143338L5204",
                            "name": "女式磨毛针织长裤 橙红 XL",
                            "quantity": 2,
                            "weight": 570,
                            "image": "PFPT143338L5204.jpg",
                            "imageChanged": false,
                            "virtual": false,
                            "canAdd": false,
                            "enableBatch": false,
                            "breakable": false,
                            "heavy": false,
                            "isLpn": false,
                            "autoSetCapacity": false,
                            "packingQty": 0,
                            "isSpecialShape": false,
                            "eans": [
                                "PFPT143338L5204"
                            ]
                        }
                    }
                ],
                "actualQuantity": 2,
                "stationCache": false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907506,
                "lastUpdatedApp": "JobManager:760",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-4-1-2",
                "bucketID": "65",
                "bucketLayer": 1,
                "bucketFaceNum": 4,
                "bucketOffset": 40,
                "bucketVOffset": 0,
                "skuID": "DZHPFSP152518L5901",
                "quantity": 3,
                "lockQuantity": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "sku": {
                    "createdUser": "haixian",
                    "createdApp": "manual",
                    "createdDate": 1430821190072,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "manual",
                    "lastUpdatedDate": 1430897710588,
                    "customerID": 2,
                    "skuID": "DZHPFSP152518L5901",
                    "skuNumber": "PFSP152518L5901",
                    "externalID": "PFSP152518L5901",
                    "name": "女式短裤 草绿",
                    "image": "PFSP152518L5901.jpg",
                    "imageChanged": false,
                    "virtual": false,
                    "canAdd": false,
                    "enableBatch": false,
                    "breakable": false,
                    "heavy": false,
                    "isLpn": false,
                    "autoSetCapacity": false,
                    "packingQty": 0,
                    "isSpecialShape": false,
                    "eans": [
                        "PFSP152518L5901"
                    ]
                },
                "storages": [
                    {
                        "lastUpdatedDate": 1468622369812,
                        "bucketSlotID": "65-4-1-2",
                        "skuID": "DZHPFSP152518L5901",
                        "quantity": 3,
                        "lockQuantity": 0,
                        "sku": {
                            "createdUser": "haixian",
                            "createdApp": "manual",
                            "createdDate": 1430821190072,
                            "lastUpdatedUser": "haixian",
                            "lastUpdatedApp": "manual",
                            "lastUpdatedDate": 1430897710588,
                            "customerID": 2,
                            "skuID": "DZHPFSP152518L5901",
                            "skuNumber": "PFSP152518L5901",
                            "name": "女式短裤 草绿",
                            "quantity": 3,
                            "image": "PFSP152518L5901.jpg",
                            "imageChanged": false,
                            "virtual": false,
                            "canAdd": false,
                            "enableBatch": false,
                            "breakable": false,
                            "heavy": false,
                            "isLpn": false,
                            "autoSetCapacity": false,
                            "packingQty": 0,
                            "isSpecialShape": false,
                            "eans": [
                                "PFSP152518L5901"
                            ]
                        }
                    }
                ],
                "actualQuantity": 3,
                "stationCache": false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907507,
                "lastUpdatedApp": "StorageManager:181",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-4-2-1",
                "bucketID": "65",
                "bucketLayer": 2,
                "bucketFaceNum": 4,
                "bucketOffset": 0,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907507,
                "lastUpdatedApp": "StorageManager:180",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-4-2-2",
                "bucketID": "65",
                "bucketLayer": 2,
                "bucketFaceNum": 4,
                "bucketOffset": 40,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907508,
                "lastUpdatedApp": "JobManager:1345",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-4-3-1",
                "bucketID": "65",
                "bucketLayer": 3,
                "bucketFaceNum": 4,
                "bucketOffset": 0,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "DataLoad",
                "createdApp": "DBDebugForL",
                "createdDate": 1422091907508,
                "lastUpdatedApp": "JobManager:1345",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65-4-3-2",
                "bucketID": "65",
                "bucketLayer": 3,
                "bucketFaceNum": 4,
                "bucketOffset": 40,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "haixian",
                "createdApp": "manual",
                "createdDate": 1434610768741,
                "lastUpdatedApp": "JobManager:882",
                "lastUpdatedDate": 1434687507912,
                "customerID": 4,
                "bucketSlotID": "65_2_5_1",
                "bucketID": "65",
                "bucketLayer": 5,
                "bucketFaceNum": 2,
                "bucketOffset": 0,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 12,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "manual",
                    "createdDate": 1433941604467,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "manual",
                    "lastUpdatedDate": 1449839679233,
                    "bucketSlotTypeID": 12,
                    "name": "T12HT",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "haixian",
                "createdApp": "manual",
                "createdDate": 1434610880484,
                "lastUpdatedApp": "JobManager:882",
                "lastUpdatedDate": 1434687507912,
                "customerID": 4,
                "bucketSlotID": "65_2_5_2",
                "bucketID": "65",
                "bucketLayer": 5,
                "bucketFaceNum": 2,
                "bucketOffset": 40,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 12,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "manual",
                    "createdDate": 1433941604467,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "manual",
                    "lastUpdatedDate": 1449839679233,
                    "bucketSlotTypeID": 12,
                    "name": "T12HT",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "walle",
                "createdApp": "BucketController:328",
                "createdDate": 1430915783136,
                "lastUpdatedApp": "JobManager:795",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65_4_4_1",
                "bucketID": "65",
                "bucketLayer": 4,
                "bucketFaceNum": 4,
                "bucketOffset": 0,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "walle",
                "createdApp": "BucketController:328",
                "createdDate": 1430915783140,
                "lastUpdatedApp": "JobManager:795",
                "lastUpdatedDate": 1434685772638,
                "customerID": 2,
                "bucketSlotID": "65_4_4_2",
                "bucketID": "65",
                "bucketLayer": 4,
                "bucketFaceNum": 4,
                "bucketOffset": 40,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 8,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "Data_Init",
                    "createdDate": 1422091873645,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "Data_Init",
                    "lastUpdatedDate": 1449839654393,
                    "bucketSlotTypeID": 8,
                    "name": "T12H",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            },
            {
                "createdUser": "haixian",
                "createdApp": "manual",
                "createdDate": 1434624515761,
                "lastUpdatedApp": "JobManager:882",
                "lastUpdatedDate": 1434687507912,
                "customerID": 4,
                "bucketSlotID": "65_4_5_1",
                "bucketID": "65",
                "bucketLayer": 5,
                "bucketFaceNum": 4,
                "bucketOffset": 0,
                "bucketVOffset": 0,
                "skuID": "SKDZHBPFAPT154116W1503",
                "quantity": 2,
                "lockQuantity": 0,
                "bucketSlotTypeID": 12,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "manual",
                    "createdDate": 1433941604467,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "manual",
                    "lastUpdatedDate": 1449839679233,
                    "bucketSlotTypeID": 12,
                    "name": "T12HT",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "sku": {
                    "createdUser": "zy",
                    "createdApp": "GoodsInBillController:486",
                    "createdDate": 1452475251280,
                    "lastUpdatedUser": "zy",
                    "lastUpdatedApp": "GoodsInBillController:486",
                    "lastUpdatedDate": 1452475251280,
                    "customerID": 4,
                    "skuID": "SKDZHBPFAPT154116W1503",
                    "skuNumber": "PFAPT154116W1503",
                    "name": "女式针织长裤 黑色 03",
                    "imageChanged": false,
                    "virtual": false,
                    "canAdd": false,
                    "enableBatch": false,
                    "breakable": false,
                    "heavy": false,
                    "isLpn": false,
                    "autoSetCapacity": false,
                    "packingQty": 0,
                    "isSpecialShape": false,
                    "eans": [
                        "PFAPT154116W1503"
                    ]
                },
                "storages": [
                    {
                        "lastUpdatedApp": "StorageUtils:110",
                        "lastUpdatedDate": 1468622369812,
                        "bucketSlotID": "65_4_5_1",
                        "skuID": "SKDZHBPFAPT154116W1503",
                        "quantity": 2,
                        "lockQuantity": 0,
                        "sku": {
                            "createdUser": "zy",
                            "createdApp": "GoodsInBillController:486",
                            "createdDate": 1452475251280,
                            "lastUpdatedUser": "zy",
                            "lastUpdatedApp": "GoodsInBillController:486",
                            "lastUpdatedDate": 1452475251280,
                            "customerID": 4,
                            "skuID": "SKDZHBPFAPT154116W1503",
                            "skuNumber": "PFAPT154116W1503",
                            "name": "女式针织长裤 黑色 03",
                            "quantity": 2,
                            "imageChanged": false,
                            "virtual": false,
                            "canAdd": false,
                            "enableBatch": false,
                            "breakable": false,
                            "heavy": false,
                            "isLpn": false,
                            "autoSetCapacity": false,
                            "packingQty": 0,
                            "isSpecialShape": false,
                            "eans": [
                                "PFAPT154116W1503"
                            ]
                        }
                    }
                ],
                "actualQuantity": 2,
                "stationCache": false
            },
            {
                "createdUser": "haixian",
                "createdApp": "manual",
                "createdDate": 1434624475971,
                "lastUpdatedApp": "JobManager:882",
                "lastUpdatedDate": 1434687507912,
                "customerID": 4,
                "bucketSlotID": "65_4_5_2",
                "bucketID": "65",
                "bucketLayer": 5,
                "bucketFaceNum": 4,
                "bucketOffset": 40,
                "bucketVOffset": 0,
                "bucketSlotTypeID": 12,
                "bucketSlotType": {
                    "createdUser": "haixian",
                    "createdApp": "manual",
                    "createdDate": 1433941604467,
                    "lastUpdatedUser": "haixian",
                    "lastUpdatedApp": "manual",
                    "lastUpdatedDate": 1449839679233,
                    "bucketSlotTypeID": 12,
                    "name": "T12HT",
                    "length": 45,
                    "width": 40,
                    "height": 36,
                    "defaultCapacity": 10
                },
                "enabled": true,
                "priority": 5,
                "bucketArea": "PICKING",
                "storages": [

                ],
                "actualQuantity": 0,
                "stationCache": false
            }
        ];
    return {
        restrict:"AE",
        template: '<canvas></canvas>',
        replace: true,
        link:function(scope,element,attrs){
            // 绑定事件
            element.bind('click', function(event) {
                scope.click();
            });

            // 根据 bucketLayer 对 bucketsData 进行排序，sortedBucketsData 最后一个元素为货架信息。
            var sortedBucketsData = window._.sortBy(bucketsData, 'bucketLayer');
            var lengthOfSortedBucketsData = sortedBucketsData.length;

            var currentLayer = sortedBucketsData[0].bucketLayer;
            var currentBucketVOffset = sortedBucketsData[0].bucketVOffset;
            var heightOfBuckets = sortedBucketsData[0].bucketSlotType.height;
            var widthOfBuckets = 0;
            var currentLayerWidth = 0;
            // 计算货架的宽度和高度，注意要测试。
            for (var i = 0; i < lengthOfSortedBucketsData - 1; i++) {
                if (currentLayer == sortedBucketsData[i].bucketLayer) {
                    if (currentBucketVOffset == sortedBucketsData[i].bucketVOffset) {
                        currentLayerWidth += sortedBucketsData[i].bucketSlotType.width;
                    }
                    if (currentBucketVOffset < sortedBucketsData[i].bucketVOffset) {
                        currentBucketVOffset = sortedBucketsData[i].bucketVOffset;
                        currentLayerWidth = 0;
                    }
                }
                if (currentLayer < sortedBucketsData[i].bucketLayer) {
                    currentLayer = sortedBucketsData[i].bucketLayer;
                    heightOfBuckets = heightOfBuckets + sortedBucketsData[i].bucketSlotType.height + currentBucketVOffset;
                    if (currentLayerWidth > widthOfBuckets) {
                        widthOfBuckets = currentLayerWidth;
                    }
                    currentLayerWidth = 0;
                    currentBucketVOffset = sortedBucketsData[i].bucketVOffset;
                }
            }
            heightOfBuckets += currentBucketVOffset;
            if (currentLayerWidth > widthOfBuckets) {
                widthOfBuckets = currentLayerWidth;
            }

            element[0].width = widthOfBuckets;
            element[0].height = heightOfBuckets;
            var ctx = element[0].getContext("2d");

            var layerStartY = heightOfBuckets - sortedBucketsData[0].bucketSlotType.height;
            currentLayer = sortedBucketsData[0].bucketLayer;
            for (var i = 0; i < lengthOfSortedBucketsData - 1; i++) {
                if (currentLayer < sortedBucketsData[i].bucketLayer) {
                    currentLayer = sortedBucketsData[i].bucketLayer;
                    layerStartY -= sortedBucketsData[i].bucketSlotType.height;
                }
                ctx.strokeRect(sortedBucketsData[i].bucketOffset, layerStartY + sortedBucketsData[i].bucketVOffset,
                    sortedBucketsData[i].bucketSlotType.width, sortedBucketsData[i].bucketSlotType.height);
            }
        }
    }
});
