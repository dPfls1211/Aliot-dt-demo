
$(document).ready(function () {
    darkJson = {
        "version": 8,
        "name": "Empty Style",
        "metadata": { "maputnik:renderer": "mbgljs" },
        "center": [126.8320138, 37.6582159],
        "zoom": 16,
        "sources": {
            "vworld-base": {
                "type": "raster",
                "tiles": ["https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png"]
            },
            "google-satellite": {
                "type": "raster",
                "tiles": [
                    "https://mts0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
                    "https://mts1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
                    "https://mts2.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
                    "https://mts3.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                ],
                "tileSize": 256
            },
            "Positron-dark-nolabels": {
                "type": "raster",
                "tiles": [
                    "https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
                    "https://b.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
                    "https://c.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
                    "https://d.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png"
                ]
            },
            "Positron-lite-nolabels": {
                "type": "raster",
                "tiles": [
                    "https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
                    "https://b.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
                    "https://c.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
                    "https://d.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
                ]
            },
            "tn_lkmh": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_lkmh",
            },
            "tn_river_bndry": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_river_bndry"
            },
            "tn_river_bt": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_river_bt"
            },
            "tn_fclty_zone_bndry": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_fclty_zone_bndry"
            },
            "tn_arrfc": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_arrfc"
            },
            "tn_ex_mainrd_a": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_mainrd_a"
            },
            "tn_ex_localrda_a": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_localrda_a"
            },
            "tn_ex_narda_a": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_narda_a"
            },
            "tn_ex_cityhwrda_a": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_cityhwrda_a"
            },
            "tn_ex_hwrda_a": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_hwrda_a"
            },
            "tn_ex_mainrdcenl_l": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_mainrdcenl_l"
            },
            "tn_ex_localrdcenl_l": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_localrdcenl_l"
            },
            "tn_ex_nardcenl_l": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_nardcenl_l"
            },
            "tn_ex_cityhwrdcenl_l": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_cityhwrdcenl_l"
            },
            "tn_ex_hwrdcenl_l": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_hwrdcenl_l"
            },
            "tn_rodway_bndry": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_rodway_bndry"
            },
            "tn_rodway_ctln": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_rodway_ctln"
            },
            "tn_lnpgr": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_lnpgr"
            },
            "tn_arpgr": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_arpgr"
            },
            "tn_ex_subwln_l": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_subwln_l"
            },
            "tn_ex_subwa_a": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_subwa_a"
            },
            "tn_ex_exitnumber_p": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_ex_exitnumber_p"
            },
            "tn_buld": {
                "type": "vector",
                "url": "https://s.gractor.com/tiles/tn_buld"
            },
            "facility": {
                "type": "geojson",
                "data": "https://s.gractor.com/assets/json/2xEifocB_mN-8u5EYMBs-facility.json",
                "generateId": true
            },
            "space": {
                "type": "geojson",
                "data": "https://s.gractor.com/assets/json/2xEifocB_mN-8u5EYMBs-space.json",
                "generateId": true
            },
            "space_wall": {
                "type": "geojson",
                "data": { "type": "FeatureCollection", "features": [] }
            },
            "device": {
                "type": "geojson",
                "data": "https://s.gractor.com/assets/json/2xEifocB_mN-8u5EYMBs-device.json"
            },
            "terrainSource": {
                "type": "raster-dem",
                "url": "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=DBapA0fS0QPloM374cKS"
            }
        },
        "sprite": "https://s.gractor.com/assets/sprites/osm-liberty/sprites",
        "glyphs": "https://s.gractor.com/assets/fonts/{fontstack}/{range}.pbf",
        "layers": [
            {
                "id": "background",
                "type": "background",
                "metadata": { "maputnik:comment": "배경색" },
                "maxzoom": 20,
                "layout": { "visibility": "visible" },
                "paint": { "background-color": " rgba(2, 3, 5, 1)" }
            },
            {
                "id": "Positron-dark",
                "type": "raster",
                "metadata": { "maputnik:comment": "Positron Dark" },
                "source": "Positron-dark-nolabels",
                "layout": { "visibility": "none" }
            },
            {
                "id": "Positron-lite",
                "type": "raster",
                "metadata": { "maputnik:comment": "Positron Lite" },
                "source": "Positron-lite-nolabels",
                "layout": { "visibility": "none" }
            },
            {
                "id": "FACILITY",
                "type": "fill-extrusion",
                "metadata": { "maputnik:comment": "시설" },
                "source": "facility",
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-extrusion-base": 0,
                    "fill-extrusion-color": [
                        "case",
                        ["boolean", ["feature-state", "hover"], false],
                        "rgba(61, 154, 185, 0.2)",
                        "rgba(204, 242, 255, 0.5)"
                    ],
                    "fill-extrusion-height": [
                        "case",
                        ["!=", 0, ["to-number", ["get", "height"]]],
                        ["get", "height"],
                        4
                    ],
                    "fill-extrusion-vertical-gradient": true
                }
            },
            {
                "id": "TN_EX_MAINRDCENL_L",
                "type": "line",
                "metadata": { "maputnik:comment": "선형주요도로" },
                "source": "tn_ex_mainrdcenl_l",
                "source-layer": "tn_ex_mainrdcenl_l",
                "minzoom": 10,
                "maxzoom": 14,
                "layout": { "visibility": "visible" },
                "paint": {
                    "line-color": "rgba(70, 85, 114, 1)",
                    "line-width": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        10,
                        1.5,
                        11,
                        2,
                        12,
                        3,
                        13,
                        3,
                        14,
                        3
                    ]
                }
            },
            {
                "id": "TN_LKMH",
                "type": "fill",
                "metadata": { "maputnik:comment": "호수및저수지" },
                "source": "tn_lkmh",
                "source-layer": "tn_lkmh",
                "minzoom": 10,
                "maxzoom": 16,
                "layout": { "visibility": "visible" },
                "paint": { "fill-color": " rgba(91,136,197,0.8)" }
            },
            {
                "id": "TN_RIVER_BNDRY",
                "type": "fill",
                "metadata": { "maputnik:comment": "하천" },
                "source": "tn_river_bndry",
                "source-layer": "tn_river_bndry",
                "minzoom": 7,
                "maxzoom": 19,
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        7,
                        " rgba(91,136,197,0.8)",
                        19,
                        " rgba(91,136,197,0.8)"
                    ],
                    "fill-opacity": 1
                }
            },
            {
                "id": "TN_RIVER_BT",
                "type": "fill",
                "metadata": { "maputnik:comment": "하천" },
                "source": "tn_river_bt",
                "source-layer": "tn_river_bt",
                "minzoom": 13,
                "maxzoom": 19,
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-color": {
                        "stops": [
                            [6, " rgba(91,136,197,0.8)"],
                            [10, " rgba(91,136,197,0.8)"]
                        ]
                    }
                }
            },
            {
                "id": "TN_EX_MAINRD_A",
                "type": "fill",
                "metadata": { "maputnik:comment": "면형주요도로" },
                "source": "tn_ex_mainrd_a",
                "source-layer": "tn_ex_mainrd_a",
                "minzoom": 15,
                "layout": { "visibility": "visible" },
                "paint": { "fill-color": "rgba(50, 54, 65 , 0.1) " }
            },
            {
                "id": "TN_EX_LOCALRDA_A",
                "type": "fill",
                "metadata": { "maputnik:comment": "면형지방도" },
                "source": "tn_ex_localrda_a",
                "source-layer": "tn_ex_localrda_a",
                "minzoom": 15,
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-color": "rgb(239,231,205)",
                    "fill-outline-color": "rgb(222,204,150)"
                }
            },
            {
                "id": "TN_EX_NARDA_A",
                "type": "fill",
                "metadata": { "maputnik:comment": "면형국도" },
                "source": "tn_ex_narda_a",
                "source-layer": "tn_ex_narda_a",
                "minzoom": 15,
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-color": "rgba(50, 54, 65 , 0.1) ",
                    "fill-outline-color": "rgb(205,186,142)"
                }
            },
            {
                "id": "TN_EX_HWRDA_A",
                "type": "fill",
                "metadata": { "maputnik:comment": "면형고속도로" },
                "source": "tn_ex_hwrda_a",
                "source-layer": "tn_ex_hwrda_a",
                "minzoom": 14,
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-color": "rgba(50, 54, 65 , 0.1) ",
                    "fill-outline-color": "rgba(37, 37, 39, 1)"
                }
            },
            {
                "id": "TN_EX_LOCALRDCENL_L",
                "type": "line",
                "metadata": { "maputnik:comment": "선형지방도" },
                "source": "tn_ex_localrdcenl_l",
                "source-layer": "tn_ex_localrdcenl_l",
                "minzoom": 8,
                "maxzoom": 14,
                "layout": { "visibility": "visible" },
                "paint": {
                    "line-color": "rgba(12, 29, 52, 1)",
                    "line-width": ["interpolate", ["linear"], ["zoom"], 8, 3, 14, 4]
                }
            },
            {
                "id": "TN_EX_NARDCENL_L",
                "type": "line",
                "metadata": { "maputnik:comment": "선형국도" },
                "source": "tn_ex_nardcenl_l",
                "source-layer": "tn_ex_nardcenl_l",
                "minzoom": 8,
                "maxzoom": 14,
                "layout": { "visibility": "visible" },
                "paint": {
                    "line-color": "rgba(30, 34, 50, 1)",
                    "line-width": ["interpolate", ["linear"], ["zoom"], 8, 3, 14, 4]
                }
            },
            {
                "id": "TN_EX_CITYHWRDCENL_L",
                "type": "line",
                "metadata": { "maputnik:comment": "선형도시고속도로" },
                "source": "tn_ex_cityhwrdcenl_l",
                "source-layer": "tn_ex_cityhwrdcenl_l",
                "minzoom": 8,
                "maxzoom": 13,
                "layout": { "visibility": "visible" },
                "paint": {
                    "line-color": "rgba(139, 166, 189, 1)",
                    "line-width": ["interpolate", ["linear"], ["zoom"], 8, 4, 13, 5]
                }
            },
            {
                "id": "TN_EX_HWRDCENL_L",
                "type": "line",
                "metadata": { "maputnik:comment": "선형고속도로" },
                "source": "tn_ex_hwrdcenl_l",
                "source-layer": "tn_ex_hwrdcenl_l",
                "minzoom": 7,
                "maxzoom": 13,
                "layout": { "visibility": "visible" },
                "paint": {
                    "line-color": "rgba(89, 102, 135, 1)",
                    "line-width": ["interpolate", ["linear"], ["zoom"], 7, 4, 13, 5]
                }
            },
            {
                "id": "TN_RODWAY_CTLN",
                "type": "line",
                "metadata": { "maputnik:comment": "면리간도로,선형일반도로" },
                "source": "tn_rodway_ctln",
                "source-layer": "tn_rodway_ctln",
                "minzoom": 13,
                "layout": { "visibility": "visible" },
                "paint": {
                    "line-color": "rgba(50, 54, 65 , 0.9)",
                    "line-width": {
                        "property": "road_se",
                        "type": "categorical",
                        "stops": [
                            ["RDC010", 2],
                            ["RDC014", 5]
                        ],
                        "default": 1.38
                    }
                }
            },
            {
                "id": "TN_LNPGR",
                "type": "line",
                "metadata": { "maputnik:comment": "보행노선" },
                "source": "tn_lnpgr",
                "source-layer": "tn_lnpgr",
                "minzoom": 16,
                "layout": { "visibility": "visible" },
                "paint": {
                    "line-color": "rgba(100, 122, 125, 1)",
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        16,
                        1.2,
                        17,
                        3.2,
                        18,
                        6,
                        19,
                        8
                    ]
                }
            },
            {
                "id": "TN_ARPGR",
                "type": "fill",
                "metadata": { "maputnik:comment": "보행노면" },
                "source": "tn_arpgr",
                "source-layer": "tn_arpgr",
                "minzoom": 16,
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-color": "rgba(50, 54, 65 , 0.1) ",
                    "fill-outline-color": "rgb(73,73,73)"
                }
            },
            {
                "id": "TN_EX_SUBWLN_L",
                "type": "line",
                "metadata": { "maputnik:comment": "지하철노선_L12-14" },
                "source": "tn_ex_subwln_l",
                "source-layer": "tn_ex_subwln_l",
                "minzoom": 12,
                "layout": { "visibility": "visible" },
                "paint": {
                    "line-color": {
                        "property": "name",
                        "type": "categorical",
                        "stops": [
                            ["서울1호선", "rgb(0,82,164)"],
                            ["서울2호선", "rgb(0,168,77)"],
                            ["서울3호선", "rgb(239,124,28)"],
                            ["서울4호선", "rgb(0,164,227)"],
                            ["서울5호선", "rgb(153,108,172)"],
                            ["서울6호선", "rgb(205,124,47)"],
                            ["서울7호선", "rgb(116,127,0)"],
                            ["서울8호선", "rgb(230,16,107)"],
                            ["서울9호선", "rgb(189,176,146)"],
                            ["경강선", "rgb(0,91,172)"],
                            ["경의중앙선", "rgb(119,196,163)"],
                            ["경춘선", "rgb(12,142,114)"],
                            ["공항철도", "rgb(0,144,210)"],
                            ["분당선", "rgb(250,190,0)"],
                            ["수인분당선", "rgb(250,190,0)"],
                            ["신분당선", "rgb(212,0,59)"],
                            ["에버라인", "rgb(92,181,49)"],
                            ["의정부경전철", "rgb(248,177,0)"],
                            ["인천공항자기부상철도", "rgb(255,205,18)"],
                            ["인천1호선", "rgb(151,187,223)"],
                            ["인천2호선", "rgb(243,152,0)"],
                            ["광주1호선", "rgb(0,144,136)"],
                            ["대구1호선", "rgb(217,63,92)"],
                            ["대구2호선", "rgb(0,170,128)"],
                            ["대구3호선", "rgb(255,177,0)"],
                            ["대전1호선", "rgb(0,116,72)"],
                            ["부산1호선", "rgb(240,106,0)"],
                            ["부산2호선", "rgb(129,191,72)"],
                            ["부산3호선", "rgb(187,140,0)"],
                            ["부산4호선", "rgb(33,125,203)"],
                            ["부산경전철", "rgb(134,82,161)"],
                            ["우이신설선", "rgb(176,206,24)"],
                            ["동해선", "rgb(0,61,165)"],
                            ["서해선", "rgb(129,169,20)"],
                            ["김포골드라인", "rgb(161,120,0)"],
                            ["신림선", "rgb(103,137,202)"]
                        ],
                        "default": {
                            "property": "sub_cd",
                            "type": "categorical",
                            "stops": [
                                ["RRC001", "rgb(0,0,0)"],
                                ["RRC002", "rgb(184,184,184)"]
                            ]
                        }
                    },
                    "line-width": {
                        "property": "sub_cd",
                        "type": "categorical",
                        "stops": [
                            ["RRC001", 2.5],
                            ["RRC002", 4.5]
                        ],
                        "default": 2
                    }
                }
            },
            {
                "id": "TN_RODWAY_BNDRY",
                "type": "fill",
                "metadata": { "maputnik:comment": "면형일반도로" },
                "source": "tn_rodway_bndry",
                "source-layer": "tn_rodway_bndry",
                "minzoom": 15,
                "layout": { "visibility": "visible" },
                "paint": { "fill-color": "rgba(79, 87, 103, 1)" }
            },
            {
                "id": "TN_ARRFC",
                "type": "fill",
                "metadata": { "maputnik:comment": "주차장구역/교통시설물" },
                "source": "tn_arrfc",
                "source-layer": "tn_arrfc",
                "minzoom": 14,
                "maxzoom": 19,
                "filter": ["all", ["has", "arrfckd_se"]],
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-color": {
                        "property": "arrfckd_se",
                        "type": "categorical",
                        "stops": [
                            ["PRF028", "rgba(88,97,116,0.9)"],
                            ["PRF009", "rgba(88,97,116,0.9)"],
                            ["PRF010", "rgba(88,97,116,0.9)"],
                            ["PRF011", "rgba(88,97,116,0.9)"],
                            ["PRF015", "rgba(88,97,116,0.9)"],
                            ["PRF012", "rgba(88,97,116,0.9)"],
                            ["PRF016", "rgba(88,97,116,0.9)"],
                            ["PRF013", "rgba(88,97,116,0.9)"]
                        ],
                        "default": "rgba(88,97,116,0.9)"
                    },
                    "fill-outline-color": "rgba(88,97,116,0.1)"
                }
            },
            {
                "id": "TN_FCLTY_ZONE_BNDRY",
                "type": "fill",
                "metadata": { "maputnik:comment": "시설구역경계" },
                "source": "tn_fclty_zone_bndry",
                "source-layer": "tn_fclty_zone_bndry",
                "minzoom": 12,
                "filter": ["all", ["has", "fzonbn_se"]],
                "layout": { "visibility": "none" },
                "paint": {
                    "fill-color": [
                        "case",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            ["literal", ["FAA201", "FAA202", "FAA203", "FAA204"]]
                        ],
                        "rgb(220,216,212)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            ["literal", ["FAA301", "FAA311", "FAA313", "FAA314"]]
                        ],
                        "rgb(225,224,232)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            ["literal", ["FAA307", "FAA401", "FAA402"]]
                        ],
                        "rgb(190,210,181)",
                        ["in", ["get", "fzonbn_se"], ["literal", ["FAA309"]]],
                        "rgb(240,240,240)",
                        ["in", ["get", "fzonbn_se"], ["literal", ["FAA403"]]],
                        "rgb(180,196,155)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            ["literal", ["FAA404", "FAA405", "FAA508", "FAA509"]]
                        ],
                        "rgb(205,212,181)",
                        ["in", ["get", "fzonbn_se"], ["literal", ["FAA406", "FAA407"]]],
                        "rgb(201,214,183)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            [
                                "literal",
                                ["FAA010", "FAA107", "FAA205", "FAA501", "FAA502", "FAA504"]
                            ]
                        ],
                        "rgb(215,221,232)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            [
                                "literal",
                                [
                                    "FAA303",
                                    "FAA304",
                                    "FAA312",
                                    "FAA408",
                                    "FAA409",
                                    "FAA410",
                                    "FAA411",
                                    "FAA412",
                                    "FAA413",
                                    "FAA414"
                                ]
                            ]
                        ],
                        "rgb(220,230,228)",
                        ["in", ["get", "fzonbn_se"], ["literal", ["FAA701"]]],
                        "rgb(231,231,231)",
                        ["in", ["get", "fzonbn_se"], ["literal", ["FAA702"]]],
                        "rgb(255,255,255)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            [
                                "literal",
                                [
                                    "FAA001",
                                    "FAA002",
                                    "FAA003",
                                    "FAA004",
                                    "FAA005",
                                    "FAA006",
                                    "FAA007",
                                    "FAA008",
                                    "FAA009",
                                    "FAA011"
                                ]
                            ]
                        ],
                        "rgb(236,228,204)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            [
                                "literal",
                                ["FAA101", "FAA102", "FAA103", "FAA104", "FAA105", "FAA106"]
                            ]
                        ],
                        "rgb(238,236,211)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            ["literal", ["FAA108", "FAA305", "FAA306", "FAA308", "FAA310"]]
                        ],
                        "rgb(221,220,216)",
                        ["in", ["get", "fzonbn_se"], ["literal", ["FAA503"]]],
                        "rgb(228,222,228)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            ["literal", ["FAA505", "FAA506", "FAA507"]]
                        ],
                        "rgb(230,214,214)",
                        [
                            "in",
                            ["get", "fzonbn_se"],
                            ["literal", ["FAA302", "FAA601", "FAA602", "FAA603"]]
                        ],
                        "rgb(231,223,229)",
                        "rgb(220,216,212)"
                    ]
                }
            },
            {
                "id": "TN_EX_SUBWA_A",
                "type": "fill",
                "metadata": { "maputnik:comment": "지하철역사" },
                "source": "tn_ex_subwa_a",
                "source-layer": "tn_ex_subwa_a",
                "minzoom": 16,
                "layout": { "visibility": "none" },
                "paint": {
                    "fill-color": {
                        "property": "line_name",
                        "type": "categorical",
                        "stops": [
                            ["서울지하철1호선", "rgb(0,82,164)"],
                            ["서울지하철2호선", "rgb(0,168,77)"],
                            ["서울지하철3호선", "rgb(239,124,28)"],
                            ["서울지하철4호선", "rgb(0,164,227)"],
                            ["서울지하철5호선", "rgb(153,108,172)"],
                            ["서울지하철6호선", "rgb(205,124,47)"],
                            ["서울지하철7호선", "rgb(116,127,0)"],
                            ["서울지하철8호선", "rgb(230,16,107)"],
                            ["서울지하철9호선", "rgb(189,176,146)"],
                            ["경강선", "rgb(0,91,172)"],
                            ["경의중앙선", "rgb(119,196,163)"],
                            ["경춘선", "rgb(12,142,114)"],
                            ["공항철도", "rgb(0,144,210)"],
                            ["분당선", "rgb(250,190,0)"],
                            ["수인분당선", "rgb(250,190,0)"],
                            ["신분당선", "rgb(212,0,59)"],
                            ["에버라인", "rgb(92,181,49)"],
                            ["의정부경전철", "rgb(248,177,0)"],
                            ["인천공항자기부상철도", "rgb(255,205,18)"],
                            ["인천지하철1호선", "rgb(151,187,223)"],
                            ["인천지하철2호선", "rgb(243,152,0)"],
                            ["광주지하철1호선", "rgb(0,144,136)"],
                            ["대구지하철1호선", "rgb(217,63,92)"],
                            ["대구지하철2호선", "rgb(0,170,128)"],
                            ["대구지하철3호선", "rgb(255,177,0)"],
                            ["대전지하철1호선", "rgb(0,116,72)"],
                            ["부산지하철1호선", "rgb(240,106,0)"],
                            ["부산지하철2호선", "rgb(129,191,72)"],
                            ["부산지하철3호선", "rgb(187,140,0)"],
                            ["부산지하철4호선", "rgb(33,125,203)"],
                            ["부산경전철", "rgb(134,82,161)"],
                            ["우이신설선", "rgb(176,206,24)"],
                            ["동해선", "rgb(0,61,165)"],
                            ["서해선", "rgb(129,169,20)"],
                            ["김포골드라인", "rgb(161,120,0)"],
                            ["신림선", "rgb(103,137,202)"]
                        ]
                    },
                    "fill-opacity": 1
                }
            },
            {
                "id": "TN_BULD_3D",
                "type": "fill-extrusion",
                "metadata": { "maputnik:comment": "건물 (내부서버)" },
                "source": "tn_buld",
                "source-layer": "tn_buld",
                "minzoom": 13,
                "layout": { "visibility": "visible" },
                "paint": {
                    "fill-extrusion-color": {
                        "property": "bprp_se",
                        "type": "categorical",
                        "stops": [
                            ["BDU016", "rgb(36,51,82)"],
                            ["BDU007", "rgb(254,60,120)"],
                            ["BDU014", "rgb(78,241, 212)"],
                            ["BDU002", "rgb(36,51,82)"],
                            ["BDU001", "rgb(51, 92, 255)"]
                        ],
                        "default": "rgb(13,18,34)"
                    },
                    "fill-extrusion-height": [
                        "case",
                        ["has", "bflr_co"],
                        ["*", 5, ["get", "bflr_co"]],
                        5
                    ],
                    "fill-extrusion-opacity": 0.8
                }
            },
            {
                "id": "FLOOR",
                "type": "fill-extrusion",
                "metadata": { "maputnik:comment": "층" },
                "source": "space",
                "filter": ["all", ["==", "indoor", "level"]],
                "layout": { "visibility": "none" },
                "paint": {
                    "fill-extrusion-base": ["get", "render_min_height"],
                    "fill-extrusion-color": ["get", "color"],
                    "fill-extrusion-height": ["+", 3.8, ["get", "render_height"]],
                    "fill-extrusion-opacity": 1
                }
            },
            {
                "id": "SPACE",
                "type": "fill",
                "metadata": { "maputnik:comment": "공간" },
                "source": "space",
                "filter": ["all", ["has", "indoor"]],
                "layout": { "visibility": "none" },
                "paint": {
                    "fill-opacity": 1,
                    "fill-color": [
                        "case",
                        [
                            "in",
                            ["get", "room"],
                            [
                                "literal",
                                [
                                    "100",
                                    "101",
                                    "102",
                                    "103",
                                    "104",
                                    "105",
                                    "106",
                                    "107",
                                    "108",
                                    "109",
                                    "110",
                                    "111",
                                    "112",
                                    "113"
                                ]
                            ]
                        ],
                        "#B2D8FC",
                        [
                            "in",
                            ["get", "room"],
                            [
                                "literal",
                                [
                                    "200",
                                    "201",
                                    "202",
                                    "203",
                                    "204",
                                    "205",
                                    "206",
                                    "300",
                                    "301",
                                    "302",
                                    "303",
                                    "304",
                                    "305"
                                ]
                            ]
                        ],
                        "#C7EAD2",
                        ["in", ["get", "room"], ["literal", ["400", "401", "402"]]],
                        "#F2E6DE",
                        [
                            "in",
                            ["get", "room"],
                            [
                                "literal",
                                ["500", "501", "502", "503", "504", "505", "506", "507"]
                            ]
                        ],
                        "#FFDD66",
                        [
                            "in",
                            ["get", "room"],
                            [
                                "literal",
                                ["600", "601", "602", "603", "604", "605", "606", "607"]
                            ]
                        ],
                        "#D2E7B7",
                        ["in", ["get", "room"], ["literal", ["700", "701", "702", "703"]]],
                        "#C4C4F8",
                        [
                            "in",
                            ["get", "room"],
                            ["literal", ["800", "801", "802", "803", "804"]]
                        ],
                        "#F2DEFE",
                        [
                            "in",
                            ["get", "room"],
                            [
                                "literal",
                                ["900", "901", "902", "903", "904", "905", "906", "907"]
                            ]
                        ],
                        "#A0A9B1",
                        ["==", ["get", "indoor"], "level"],
                        "#C9CBCD",
                        ["==", ["get", "indoor"], "area"],
                        "#ffffff",
                        "#ffffff"
                    ],
                    "fill-outline-color": "#000000"
                }
            },
            {
                "id": "SPACE_WALL",
                "type": "fill-extrusion",
                "metadata": { "maputnik:comment": "공간 벽" },
                "source": "space_wall",
                "filter": ["all", ["!=", "indoor", "level"]],
                "layout": { "visibility": "none" },
                "paint": {
                    "fill-extrusion-base": 0,
                    "fill-extrusion-color": [
                        "case",
                        ["==", ["get", "indoor"], "door"],
                        "#1f1f1f",
                        "#f0f0f0"
                    ],
                    "fill-extrusion-height": [
                        "case",
                        ["==", ["get", "indoor"], "area"],
                        0,
                        1
                    ],
                    "fill-extrusion-opacity": 0.8
                }
            },
            {
                "id": "SPACE_LINE",
                "type": "line",
                "metadata": { "maputnik:comment": "공간 HIGHWAY" },
                "source": "space_wall",
                "filter": ["all", ["==", "indoor", "highway"]],
                "layout": { "visibility": "none" },
                "paint": {
                    "line-opacity": 1,
                    "line-dasharray": [0.2, 0.2],
                    "line-color": "#f8b29c",
                    "line-width": 20
                }
            },
            {
                "id": "SPACE_POI",
                "type": "symbol",
                "metadata": { "maputnik:comment": "공간 AMENITY" },
                "source": "space_wall",
                "minzoom": 15,
                "filter": ["all", ["==", "indoor", "amenity"]],
                "layout": {
                    "visibility": "none",
                    "icon-image": {
                        "property": "amenity",
                        "type": "categorical",
                        "stops": [
                            ["201", "toilet_15"],
                            ["202", "toilet_15"],
                            ["203", "toilet_15"],
                            ["204", "toilet_15"],
                            ["205", "drinking_water_15"],
                            ["206", "restaurant_15"],
                            ["301", "shelter_15"],
                            ["302", "pitch_15"],
                            ["401", "entrance_15"],
                            ["402", "entrance_15"]
                        ]
                    },
                    "icon-anchor": "bottom",
                    "icon-offset": [0, -5],
                    "icon-pitch-alignment": "map",
                    "text-pitch-alignment": "map",
                    "text-field": "{name}",
                    "text-font": ["Noto Sans KR Regular"],
                    "text-size": 12
                },
                "paint": {
                    "text-color": "#000",
                    "text-halo-color": "#fff",
                    "text-halo-width": 1
                }
            }, {
                "id": "google",
                "type": "raster",
                "metadata": { "maputnik:comment": "구글위성" },
                "source": "google-satellite",
                "layout": { "visibility": "none" }
            },
            {
                "id": "vworld",
                "type": "raster",
                "metadata": { "maputnik:comment": "vWorld 기본" },
                "source": "vworld-base",
                "layout": { "visibility": "none" }
            }
        ],
        "id": "ojfjodnvz"
    }
})