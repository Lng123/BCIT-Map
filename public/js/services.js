var createDropdown = (name, id) => {
    return `
    <button class="dropdown-btn"> ${name} <i class="fa fa-caret-down"></i> </button> 
    <div id=${id} class="dropdown-container"> </div>`;
};

var createButton = (building, name, description) => {
    return `<button onclick="selectService('${building}', '${name} - ${building}', '${description}')"> ${name} </button>`;
};

var getData = async () => {
    let data = await fetch('/servicesData');
    let json = await data.json();
    return json;
};

var populateMenu = async () => {
    let data = await getData();
    document.getElementById('loading').remove();
    let campusMap = document.getElementById('campus-map');
    let serviceGroups = data.serviceGroups[0];
    let menuOptions = new Array();
    serviceGroups.forEach((element) => {
        menuOptions.push(createDropdown(element.name, element.id));
    });
    campusMap.insertAdjacentHTML('beforeend', sidenav);
    campusMap.insertAdjacentHTML('beforeend', map);
    let html = document.querySelector('html');
    let body = document.querySelector('body');
    html.style.height = '';
    body.style.height = '';
    let nav = document.getElementById('sidenav');
    menuOptions.forEach((e) => {
        nav.insertAdjacentHTML('beforeend', e);
    });
    let services = data.services[0];
    services.forEach((e) => {
        let el = document.getElementById(e.group);
        let test = createButton(e.buildingNumber, e.serviceName, e.description);
        el.insertAdjacentHTML('beforeend', test);
    });
    let script = document.createElement('script');
    script.src = 'js/script.js';
    campusMap.append(script);
    let zoom = document.createElement('script');
    zoom.src = 'js/zoom.js';
    campusMap.append(zoom);
};
``;
populateMenu();

var sidenav = `
    <div class="col-sm-2">
        <div class="sidenav">
            <div id="sidenav" class="sidenav-cont">   
            </div>
        </div>
    </div>
`;

var map = `
<div class="col-sm-10">
    <div id="outer-map">
    <div id="map">
        <div id="map_container" style="position: relative; left: 0; top: 0;">
            <img id="bus_stops_overlay" src="/media/overlays/bus_stops_overlay.png" usemap="#image-map">
            <img id="campus_entrances_overlay" src="/media/overlays/campus_entrances_overlay.png" usemap="#image-map">
            <img id="employee_parking_overlay" src="/media/overlays/employee_parking_overlay.png" usemap="#image-map">
            <img id="first_aid_overlay" src="/media/overlays/first_aid_overlay.png" usemap="#image-map">
            <img id="food_services_overlay" src="/media/overlays/food_services_overlay.png" usemap="#image-map">
            <img id="handicap_overlay" src="/media/overlays/handicap_overlay.png" usemap="#image-map">
            <img id="security_overlay" src="/media/overlays/security_overlay.png" usemap="#image-map">
            <img id="student_parking_overlay" src="/media/overlays/student_parking_overlay.png" usemap="#image-map">
            <img id="visitor_parking_overlay" src="/media/overlays/visitor_parking_overlay.png" usemap="#image-map">
            <img id="bike_overlay" src="/media/overlays/bike_overlay.png" usemap="#image-map">
            <img id="image" src="/media/burnaby_campus_map.png">

            <map id="image_map" name="image-map">
            <!--            NE Buildings-->
                <area target="" class="NE" full="NE09 Building" id="NE09" building="NE09" alt="NE09" title="NE09" href="#" coords="184,133,184,255,350,255,350,133,310,133,297,172,237,172,241,133" shape="poly">
                <area target="" class="NE" full="NE07 Building" id="NE07" building="NE07" alt="NE07" title="NE07" href="#" coords="367,120,397,120,397,259,371,263" shape="poly">
                <area target="" class="NE" full="NE08 Building" id="NE08" building="NE08" alt="NE08" title="NE08" href="#" coords="419,259,545,259,545,276,589,276,589,346,550,346,550,363,428,363" shape="poly">
                <area target="" class="NE" full="NE28 Building" id="NE28" building="NE28" alt="NE28" title="NE28" href="#" coords="719,398,780,398,780,493,719,493" shape="poly">
                <area target="" class="NE" full="NE16 Building" id="NE16" building="NE16" alt="NE16" title="NE16" href="#" coords="798,502,911,502,937,484,937,346,906,324,806,324" shape="poly">
                <area target="" class="NE" full="NE18 Building" id="NE18" building="NE18" alt="NE18" title="NE18" href="#" coords="793,524,906,519,906,537,937,545,937,654,828,658,828,641,793,641" shape="poly">
                <area target="" class="NE" full="NE24 Building" id="NE24" building="NE24" alt="NE24" title="NE24" href="#" coords="724,636,780,632,780,728,724,728" shape="poly">
                <area target="" class="NE" full="NE22 Building" id="NE22" building="NE22" alt="NE22" title="NE22" href="#" coords="724,840,780,840,776,741,719,741" shape="poly">
                <area target="" class="NE" full="NE20 Building" id="NE20" building="NE20" alt="NE20" title="NE20" href="#" coords="837,667,902,667,902,710,937,710,937,845,902,836,902,814,867,810,858,840,819,840,815,814,798,801,798,715,837,715" shape="poly">
                <area target="" class="NE" full="NE10 Building" id="NE10" building="NE10" alt="NE10" title="NE10" href="#" coords="419,94,589,94,589,228,550,228,537,250,484,246,476,228,419,224" shape="poly">
                <area target="" class="NE" full="NE12 Building" id="NE12" building="NE12" alt="NE12" title="NE12" href="#" coords="606,98,754,102,763,272,728,267,728,241,615,241" shape="poly">
                <area target="" class="NE" full="NE06 Building" id="NE06" building="NE06" alt="NE06" title="NE06" href="#" coords="419,367,567,372,563,497,463,497,458,471,419,467" shape="poly">  
                <area target="" class="NE" full="NE01 building" id="NE01" building="NE01" alt="NE01" title="NE01" href="#" coords="168,525,168,761,188,761,194,767,226,773,220,754,246,754,252,767,342,767,342,529,246,529,246,516,213,510" shape="poly">
                <area target="" class="NE" full="NE02 building" id="NE02" building="NE02" alt="NE02" title="NE02" href="#" coords="478,691,423,691,423,808,564,808,564,716,478,716" shape="poly">
                <area target="" class="NE" full="NE04 building" id="NE04" building="NE04" alt="NE04" title="NE04" href="#" coords="423,538,423,648,564,650,564,513,496,513,496,538" shape="poly">
                <area target="" class="NE" full="NE21 building" id="NE21" building="NE21" alt="NE21" title="NE21" href="#" coords="588,746,649,746,649,845,588,845" shape="poly">
                <area target="" class="NE" full="NE23 building" id="NE23" building="NE23" alt="NE23" title="NE23" href="#" coords="594,642,594,728,649,728,649,642" shape="poly">
                <area target="" class="NE" full="NE25 building" id="NE25" building="NE25" alt="NE25" title="NE25" href="#" coords="582,489,582,612,649,612,649,489" shape="poly">
            <!--            NW Buildings-->
                <area target="" class="NW" full="NW01 building" id="NW01" building="NW01" alt="NW01" title="NW01" href="#" coords="588,1077,588,1169,735,1169,735,1077" shape="poly">
                <area target="" class="NW" full="NW03 building" id="NW03" building="NW03" alt="NW03" title="NW03" href="#" coords="454,912,454,1041,570,1041,570,912" shape="poly">
                <area target="" class="NW" full="NW05 building" id="NW05" building="NW05" alt="NW05" title="NW05" href="#" coords="711,893,760,893,760,966,711,966" shape="poly">
                <area target="" class="NW" full="NW06 building" id="NW06" building="NW06" alt="NW06" title="NW06" href="#" coords="937,880,937,991,772,991,772,880" shape="poly">
                
            <!--            SE Buildings-->
                <area target="" class="SE" full="SE19 Building" id="SE19" building="SE19" alt="SE19" title="SE19" href="#" coords="1732,143,1868,243" shape="rect">
                <area target="" class="SE" full="SE30 Building" id="SE30" building="SE30" alt="SE30" title="SE30" href="#" coords="2530,179,2659,258" shape="rect">
                <area target="" class="SE" full="SE40 Building" id="SE40" building="SE40" alt="SE40" title="SE40" href="#" coords="3411,163,3407,249,3429,249,3429,265,3479,265,3479,249,3497,249,3500,163" shape="poly">
                <area target="" class="SE" full="SE41 Building" id="SE41" building="SE41" alt="SE41" title="SE41" href="#" coords="3304,251,3361,372" shape="rect">
                <area target="" class="SE" full="SE42 Building" id="SE42" building="SE42" alt="SE42" title="SE42" href="#" coords="3393,357,3393,407,3468,407,3525,364,3525,285,3479,289,3483,339,3457,357" shape="poly">
                <area target="" class="SE" full="SE50 Building" id="SE50" building="SE50" alt="SE50" title="SE50" href="#" coords="3679,174,3679,239,3647,239,3647,296,3726,292,3730,303,3776,303,3776,289,3801,289,3805,235,3762,235,3783,231,3783,217,3787,217,3790,203,3787,189,3765,174" shape="poly">
                <area target="" class="SE" full="SE01 Building" id="SE01" building="SE01" alt="SE01" title="SE01" href="#" coords="1331,237,1127,235,1127,246,973,247,973,309,1048,309,1069,330,1048,363,1059,377,1073,370,1080,377,1091,377,1102,391,1116,381,1130,377,1137,363,1177,359,1184,338,1295,338,1306,302,1313,280,1331,284" shape="poly">
                <area target="" class="SE" full="SE04 Building" id="SE04" building="SE04" alt="SE04" title="SE04" href="#" coords="1123,434,1019,434,1019,462,1037,466,1041,530,1130,534,1130,484,1120,484,1130,484" shape="poly">
                <area target="" class="SE" full="SE02 Building" id="SE02" building="SE02" alt="SE02" title="SE02" href="#" coords="1159,566,1009,563,1009,703,987,703,995,760,980,764,977,810,1156,814,1152,771,1141,771,1138,645,1156,641" shape="poly">
                <area target="" class="SE" full="SE06 Building" id="SE06" building="SE06" alt="SE06" title="SE06" href="#" coords="1166,419,1238,419,1238,563,1267,563,1267,649,1163,649" shape="poly">
                <area target="" class="SE" full="SE09 Building" id="SE09" building="SE09" alt="SE09" title="SE09" href="#" coords="1338,681,1392,720" shape="rect">
                <area target="" class="SE" full="SE08 Building" id="SE08" building="SE08" alt="SE08" title="SE08" href="#" coords="1335,681,1209,681,1209,713,1166,713,1166,749,1202,749,1206,792,1331,788" shape="poly">
                <area target="" class="SE" full="SE12 Building" id="SE12" building="SE12" alt="SE12" title="SE12" href="#" coords="1338,724,1639,727,1643,799,1338,799" shape="poly">
                <area target="" class="SE" full="SE14 Building" id="SE14" building="SE14" alt="SE14" title="SE14" href="#" coords="1567,720,1567,670,1600,670,1596,505,1610,505,1610,487,1625,487,1625,505,1668,505,1674,681,1631,678,1632,720" shape="poly">
                <area target="" class="SE" full="SE10 Building" id="SE10" building="SE10" alt="SE10" title="SE10" href="#" coords="1495,487,1528,487,1528,508,1549,508,1546,530,1556,530,1556,601,1571,623,1571,666,1492,669,1492,601,1474,601,1474,512,1495,508" shape="poly">
                <area target="" class="SE" full="SE16 Building" id="SE16" building="SE16" alt="SE16" title="SE16" href="#" coords="1800,482,1800,580,1800,616,1778,632,1742,632,1742,715,1753,715,1750,736,1764,740,1764,754,1900,754,1904,747,1954,743,1954,718,1964,718,1961,708,1986,708,1982,682,1964,675,1964,647,1911,643,1911,614,1932,611,1936,546,1868,546,1864,495,1828,495,1828,484" shape="poly">
            <!--            SW Buildings-->
                <area target="" class="SW" full="SW01 Building" id="SW01" building="SW01" alt="SW01" title="SW01" href="#" coords="1338,923,1334,838,1302,838,1302,879,1270,877,1270,841,1105,838,1105,895,1119,897,1119,927,1048,927,1026,954,1044,988,1084,991,1087,1102,1073,1144,1141,1133,1316,1135,1313,1020,1298,995,1349,999,1363,959,1356,934" shape="poly">
                <area target="" class="SW" full="SW02 Building" id="SW02" building="SW02" alt="SW02" title="SW02" href="#" coords="1313,1083,1313,1112,1345,1141,1370,1141,1399,1108,1442,1098,1406,1090,1352,1040" shape="poly">
                <area target="" class="SW" full="SW03 Building" id="SW03" building="SW03" alt="SW03" title="SW03" href="#" coords="1574,1105,1574,1148,1488,1148,1470,1148,1449,1133,1427,1087,1420,983,1356,983,1367,937,1427,935,1424,818,1445,811,1445,786,1492,797,1499,962,1481,983,1481,1098,1546,1090" shape="poly">
                <area target="" class="SW" full="SW05 Building" id="SW05" building="SW05" alt="SW05" title="SW05" href="#" coords="1520,933,1542,929,1563,921,1563,945,1599,940,1610,972,1599,1008,1578,999,1560,1019,1542,1015,1528,1002,1524,977" shape="poly">
                <area target="" class="SW" full="SW09 Building" id="SW09" building="SW09" alt="SW09" title="SW09" href="#" coords="1836,857,1986,860,1986,1018,1975,1036,1975,1071,1993,1079,1993,1147,1832,1150" shape="poly">
                <area target="" class="SW" full="SW10 Building" id="SW10" building="SW10" alt="SW10" title="SW10" href="#" coords="2244,768,2233,776,2179,776,2176,797,2186,829,2222,833,2272,818,2276,768" shape="poly">
                <area target="" class="SW" full="SW11 Building" id="SW11" building="SW11" alt="SW11" title="SW11" href="#" coords="2380,869,2344,861,2330,878,2283,872,2280,897,2294,935,2330,926,2376,925" shape="poly">
                <area target="" class="SW" full="SW12 Building" id="SW12" building="SW12" alt="SW12" title="SW12" href="#" coords="2423,747,2383,747,2369,754,2315,754,2312,783,2333,811,2365,808,2416,797" shape="poly">
                <area target="" class="SW" full="SW13 Building" id="SW13" building="SW13" alt="SW13" title="SW13" href="#" coords="2527,828,2487,828,2480,842,2426,839,2423,860,2433,900,2473,896,2516,889" shape="poly">
                <area target="" class="SW" full="SW14 Building" id="SW14" building="SW14" alt="SW14" title="SW14" href="#" coords="2559,730,2523,730,2509,748,2466,737,2459,759,2469,803,2501,795,2552,787" shape="poly">
                <area target="" class="SW" full="SW15 Building" id="SW15" building="SW15" alt="SW15" title="SW15" href="#" coords="2638,826,2620,836,2577,833,2566,858,2580,894,2623,894,2666,886,2673,826" shape="poly">
                <area target="" class="SW" full="SW16 Building" id="SW16" building="SW16" alt="SW16" title="SW16" href="#" coords="2702,718,2666,718,2652,736,2602,725,2602,747,2609,783,2645,783,2691,776" shape="poly">
            <!--            CARI Building-->
                <area target="" class="CARI" full="CARI Building" id="CARI" building="CARI" alt="CARI" title="CARI" href="#" coords="2437,1306,2487,1267,2530,1317,2570,1317,2638,1249,2695,1303,2723,1271,2817,1364,2709,1468,2688,1446,2630,1503,2573,1439,2534,1439,2484,1493,2437,1450,2494,1396,2491,1360" shape="poly">
            <!--            Bus Stops-->
                <area target="" data-key="T" class="bus" full ="Test" id="BetaE" building="BetaE" alt="BetaE" title="BetaE" href="#" coords="131,21,171,64" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="BetaW" building="BetaW" alt="BetaW" title="BetaW" href="#" coords="35,186,74,229" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="WillingdonWB" building="WillingdonWB" alt="WillingdonWB" title="WillingdonWB" href="#" coords="24,854,63,894" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="WillingdonEB" building="WillingdonEB" alt="WillingdonEB" title="WillingdonEB" href="#" coords="88,1153,124,1192" shape="rect">
                <area target="" data-key="T" class="bus" full ="Test" id="CanadaN" building="CanadaN" alt="CanadaN" title="CanadaN" href="#" coords="260,1229,303,1265" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="CanadaS" building="CanadaS" alt="CanadaS" title="CanadaS" href="#" coords="260,1336,300,1376" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="GoardN" building="GoardN" alt="GoardN" title="GoardN" href="#" coords="1112,1255,1155,1296" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="GoardS" building="GoardS" alt="GoardS" title="GoardS" href="#" coords="1112,1342,1152,1382" shape="rect">
                <area target="" data-key="T" class="bus" full ="Test" id="SandersonS" building="SandersonS" alt="SandersonS" title="SandersonS" href="#" coords="2093,1327,2136,1366" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="MathissiE" building="MathissiE" alt="MathissiE" title="MathissiE" href="#" coords="2244,1534,2287,1574"  shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="SandersonN" building="SandersonN" alt="SandersonN" title="SandersonN" href="#" coords="2165,1194,2204,1234" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="DeerN" building="DeerN" alt="DeerN" title="DeerN" href="#" coords="3483,1045,3522,1088" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="WillingdonED" building="WillingdonED" alt="WillingdonED" title="WillingdonED" href="#" coords="3665,943,3708,982" shape="rect">
                <area target="" data-key="T" class="bus" full ="" id="WayburneWD" building="WayburneWD" alt="WayburneWD" title="WayburneWD" href="#" coords="3901,191,3941,231" shape="rect">

            <!-- Parking lots -->
                <area target="" class="sparking" id="LOTA"   building="LOTA"   full="LOT A"   alt="LOT A" title="LOT A" href="#" coords="776,106,955,285" shape="rect">
                <area target="" class="sparking" id="LOTB"   building="LOTB"   full="LOT B"   alt="LOT B" title="LOT B" href="#" coords="983,119,1234,205" shape="rect">
                <area target="" class="sparking" id="LOTD"   building="LOTD"   full="LOT D"   alt="LOT D" title="LOT D" href="#" coords="1936,214,2190,367" shape="rect">
                <area target="" class="sparking" id="LOTF"   building="LOTF"   full="LOT F"   alt="LOT F" title="LOT F" href="#" coords="2226,212,2487,363" shape="rect">
                <area target="" class="sparking" id="LOTE"   building="LOTE"   full="LOT E"   alt="LOT E" title="LOT E" href="#" coords="1911,132,2501,186" shape="rect">
                <area target="" class="sparking" id="LOTG"   building="LOTG"   full="LOT G"   alt="LOT G" title="LOT G" href="#" coords="2530,129,2863,175" shape="rect">
                <area target="" class="sparking" id="LOTK"   building="LOTK"   full="LOT K"   alt="LOT K" title="LOT K" href="#" coords="2795,545,2870,749" shape="rect">
                <area target="" class="sparking" id="LOTL"   building="LOTL"   full="LOT L"   alt="LOT L" title="LOT L" href="#" coords="2888,536,2888,761,3182,772,3185,697,3060,539" shape="poly">
                <area target="" class="sparking" id="LOTJ"   building="LOTJ"   full="LOT J"   alt="LOT J" title="LOT J" href="#" coords="2874,910,2809,810" shape="rect">
                <area target="" class="sparking" id="LOTN"   building="LOTN"   full="LOT N"   alt="LOT N" title="LOT N" href="#" coords="3500,938,2687,934,2684,1009,2512,1031,2340,1059,2147,1153,2154,1181,2365,1095,2523,1067,2695,1049,3160,1052,3167,1024,3504,1024" shape="poly">
                <area target="" class="sparking" id="LOTQ"   building="LOTQ"   full="LOT Q"   alt="LOT Q" title="LOT Q" href="#" coords="160,965,396,1180" shape="rect">
                <area target="" class="sparking" id="LOTS"   building="LOTS"   full="LOT S"   alt="LOT S" title="LOT S" href="#" coords="2817,1285,2885,1349" shape="rect">
                <area target="" class="sparking" id="LOTS2"  building="LOTS2"  full="LOT S"  alt="LOT S2" title="LOT S2" href="#" coords="2294,1382,2365,1460" shape="rect">
                <area target="" class="sparking" id="LOTM"   building="LOTM"   full="LOT M"  alt="LOT M" title="LOT M" href="#" coords="3185,900,2913,832" shape="rect">
                <area target="" class="sparking" id="LOTH"   building="LOTH"   full="LOT H"  alt="LOT H" title="LOT H" href="#" coords="2745,185,2860,396" shape="rect">
                <area target="" class="sparking" id="LOTD"   building="LOTD"   full="LOT D"  alt="LOT D" title="LOT D" href="#" coords="3411,483,3597,487,3708,540,3615,694" shape="poly">
            <!-- employee parking-->
                <area target="" class="eparking" id="LOT19"   building="LOT19"   full="LOT 19"   alt="LOT 19" title="LOT 19" href="" coords="690,821,797,914" shape="rect">
                <area target="" class="eparking" id="LOT16"   building="LOT16"   full="LOT 16"   alt="LOT 16" title="LOT 16" href="" coords="797,937,890,1033" shape="rect">
                <area target="" class="eparking" id="LOT1"   building="LOT1"   full="LOT 1"   alt="LOT 1" title="LOT 1" href="" coords="1012,976,1087,1055" shape="rect">
                <area target="" class="eparking" id="LOT10"   building="LOT10"   full="LOT 10"   alt="LOT 10" title="LOT 10" href="" coords="1191,754,1259,833" shape="rect">
                <area target="" class="eparking" id="LOT7"   building="LOT7"   full="LOT 7"   alt="LOT 7" title="LOT 7" href="#" coords="1241,118,1359,119,1603,180,1714,177,1714,252,1871,259,1857,388,1349,381,1349,216,1241,215" shape="poly">
                <area target="" class="eparking" id="LOT5"   building="LOT5"   full="LOT 5"   alt="LOT 5" title="LOT 5" href="#" coords="1338,440,1435,673" shape="rect">
                <area target="" class="eparking" id="LOT12"  building="LOT12"  full="LOT 12"  alt="LOT 12" title="LOT 12" href="#" coords="1463,431,1571,431,1567,477,1585,506,1596,635,1563,599,1560,517,1513,470,1485,470,1485,499,1463,506" shape="poly">
                <area target="" class="eparking" id="LOT26"  building="LOT26"  full="LOT 26"  alt="LOT 26" title="LOT 26" href="#" coords="3304,155,3393,237" shape="rect">
                <area target="" class="eparking" id="LOT27"  building="LOT27"  full="LOT 27"  alt="LOT 27" title="LOT 27" href="#" coords="3293,430,3533,472" shape="rect">
                <area target="" class="eparking" id="LOT6"   building="LOT6"   full="LOT 6"   alt="LOT 6" title="LOT 6" href="#" coords="1778,1190,2079,1236" shape="rect">
                <area target="" class="eparking" id="LOT62"  building="LOT62"  full="LOT 6"  alt="LOT 6.2" title="LOT 6.2" href="#" coords="1843,799,1957,854" shape="rect">
                <area target="" class="eparking" id="LOT9"   building="LOT9"   full="LOT 9"   alt="LOT 9" title="LOT 9" href="#" coords="1614,1114,1793,1176" shape="rect">
                <area target="" class="eparking" id="LOT4"   building="LOT4"   full="LOT 4"   alt="LOT 4" title="LOT 4" href="#" coords="1503,1193,1728,1240" shape="rect">
                <area target="" class="eparking" id="LOT15"  building="LOT15"  full="LOT 15"  alt="LOT 15" title="LOT 15" href="#" coords="464,1192,754,1246" shape="rect">
                <area target="" class="eparking" id="LOT22"  building="LOT22"  full="LOT 22"  alt="LOT 22" title="LOT 22" href="#" coords="439,1058,586,1176" shape="rect">
                <area target="" class="eparking" id="LOT23"  building="LOT23"  full="LOT 23"  alt="LOT 23" title="LOT 23" href="#" coords="149,888,396,959" shape="rect">
                <area target="" class="eparking" id="LOT21"  building="LOT21"  full="LOT 21"  alt="LOT 21" title="LOT 21" href="#" coords="196,780,400,881" shape="rect">
                <area target="" class="eparking" id="LOT211" building="LOT211" full="LOT 21" alt="LOT 21.1" title="LOT 21.1" href="#" coords="128,532,160,747" shape="rect">
                <area target="" class="eparking" id="LOT212" building="LOT212" full="LOT 21" alt="LOT 21.2" title="LOT 21.2" href="#" coords="353,562,407,639" shape="rect">
                <area target="" class="eparking" id="LOT213" building="LOT213" full="LOT 21" alt="LOT 21.3" title="LOT 21.3" href="#" coords="221,389,310,471" shape="rect">
                <area target="" class="eparking" id="LOT214" building="LOT214" full="LOT 21" alt="LOT 21.4" title="LOT 21.4" href="#" coords="407,527,339,484" shape="rect">
                <area target="" class="eparking" id="LOT24"  building="LOT24"  full="LOT 24"  alt="LOT 24" title="LOT 24" href="#" coords="146,393,210,493" shape="rect">
                <area target="" class="eparking" id="LOT25"  building="LOT25"  full="LOT 25"  alt="LOT 25" title="LOT 25" href="#" coords="403,265,403,358,160,354,160,251,160,107,303,107,296,168,239,168,235,129,185,129,185,265" shape="poly">
                <area target="" class="eparking" id="LOT20"  building="LOT20"  full="LOT 20"  alt="LOT 20" title="LOT 20" href="#" coords="421,981,457,984,461,902,643,906,647,866,582,859,561,816,421,816" shape="poly">
                <area target="" class="eparking" id="LOT29"  building="LOT29"  full="LOT 29"  alt="LOT 29" title="LOT 29" href="#" coords="2874,1205,2501,1219,2369,1346,2373,1489,2351,1532,2441,1513,2408,1420,2462,1366,2426,1330,2444,1269,2509,1252,2555,1266,2881,1259" shape="poly">
                <area target="" class="eparking" id="LOT28"  building="LOT28"  full="LOT 28"  alt="LOT 28" title="LOT 28" href="#" coords="3790,148,3919,220" shape="rect">
                <area target="" class="eparking" id="LOT281" building="LOT281" full="LOT 28" alt="LOT 28.1" title="LOT 28.1" href="#" coords="3827,243,3902,279,3873,369,3730,419,3594,401,3612,336,3658,347,3744,354,3798,347,3848,294" shape="poly">
            <!-- visitor parking-->
                <area target="" class="vparking" id="LOTV3"  building="LOTV3"  full="LOT V3"  alt="LOT V3" title="LOT V3" href="#" coords="1603,418,1742,482" shape="rect">
                <area target="" class="vparking" id="LOTV2"  building="LOTV2"  full="LOT V2"  alt="LOT v2" title="LOT v2" href="#" coords="221,478,317,521" shape="rect">
                <area target="" class="vparking" id="LOTV1"  building="LOTV1"  full="LOT V1"  alt="LOT V1" title="LOT V1" href="#" coords="1023,1178,1413,1235" shape="rect">
                <area target="" class="vparking" id="LOTV4"  building="LOTV4"  full="LOT V4"  alt="LOT V4" title="LOT V4" href="#" coords="3504,162,3568,262" shape="rect">
                <area target="" class="vparking" id="LOTV5"  building="LOTV5"  full="LOT V5"  alt="LOT V5" title="LOT V5" href="#" coords="1606,1055,1793,1108" shape="rect">
            <!-- student housing parking-->
                <area target="" class="parking" id="house"  building="house"  full="Student Housing Parking"  alt="STUDENT HOUSING PARKING" title="STUDENT HOUSING PARKING" href="#" coords="2333,976,2344,1048,2530,1015,2673,997,2681,915,2509,933" shape="poly">
            <!-- accessible parking icons-->
                <area target="" class="aparking" id="HC01" building="HC01" full="accessible parking" alt="HC01" title="HC01" href="" coords="164,257,210,299" shape="rect">
                <area target="" class="aparking" id="HC02" building="HC02" full="accessible parking" alt="HC02" title="HC02" href="" coords="124,482,167,521" shape="rect">
                <area target="" class="aparking" id="HC03" building="HC03" full="accessible parking" alt="HC03" title="HC03" href="" coords="339,645,389,703" shape="rect">
                <area target="" class="aparking" id="HC04" building="HC04" full="accessible parking" alt="HC04" title="HC04" href="" coords="181,786,239,829" shape="rect">
                <area target="" class="aparking" id="HC05" building="HC05" full="accessible parking" alt="HC05" title="HC05" href="" coords="421,1052,482,1110" shape="rect">
                <area target="" class="aparking" id="HC06" building="HC06" full="accessible parking" alt="HC06" title="HC06" href="" coords="557,1222,618,1275" shape="rect">
                <area target="" class="aparking" id="HC07" building="HC07" full="accessible parking" alt="HC07" title="HC07" href="" coords="1019,1036,1080,1093" shape="rect">
                <area target="" class="aparking" id="HC08" building="HC08" full="accessible parking" alt="HC08" title="HC08" href="" coords="1177,1222,1248,1279" shape="rect">
                <area target="" class="aparking" id="HC09" building="HC09" full="accessible parking" alt="HC09" title="HC09" href="" coords="1241,780,1306,845" shape="rect">
                <area target="" class="aparking" id="HC10" building="HC10" full="accessible parking" alt="HC11" title="HC11" href="" coords="869,280,940,327" shape="rect">
                <area target="" class="aparking" id="HC11" building="HC11" full="accessible parking" alt="HC12" title="HC12" href="" coords="1270,338,1331,406" shape="rect">
                <area target="" class="aparking" id="HC12" building="HC12" full="accessible parking" alt="HC13" title="HC13" href="" coords="1367,523,1409,569" shape="rect">
                <area target="" class="aparking" id="HC13" building="HC13" full="accessible parking" alt="HC14" title="HC14" href="" coords="1442,613,1506,678" shape="rect">
                <area target="" class="aparking" id="HC14" building="HC14" full="accessible parking" alt="HC15" title="HC15" href="" coords="1803,1170,1875,1238" shape="rect">
                <area target="" class="aparking" id="HC15" building="HC15" full="accessible parking" alt="HC16" title="HC16" href="" coords="1699,421,1753,486" shape="rect">
                <area target="" class="aparking" id="HC16" building="HC16" full="accessible parking" alt="HC17" title="HC17" href="" coords="1929,326,2000,390" shape="rect">
                <area target="" class="aparking" id="HC17" building="HC17" full="accessible parking" alt="HC18" title="HC18" href="" coords="2079,321,2151,385" shape="rect">
                <area target="" class="aparking" id="HC18" building="HC18" full="accessible parking" alt="HC19" title="HC19" href="" coords="2330,954,2412,1012" shape="rect">
                <area target="" class="aparking" id="HC19" building="HC19" full="accessible parking" alt="HC20" title="HC20" href="" coords="2530,1223,2612,1287" shape="rect">
                <area target="" class="aparking" id="HC20" building="HC20" full="accessible parking" alt="HC21" title="HC21" href="" coords="2387,1340,2459,1408" shape="rect">
                <area target="" class="aparking" id="HC21" building="HC21" full="accessible parking" alt="HC22" title="HC22" href="" coords="2369,1436,2433,1479" shape="rect">
                <area target="" class="aparking" id="HC22" building="HC22" full="accessible parking" alt="HC23" title="HC23" href="" coords="2523,1466,2609,1538" shape="rect">
                <area target="" class="aparking" id="HC23" building="HC23" full="accessible parking" alt="HC24" title="HC24" href="" coords="2448,200,2512,261" shape="rect">
                <area target="" class="aparking" id="HC24" building="HC24" full="accessible parking" alt="HC25" title="HC25" href="" coords="3300,189,3372,257" shape="rect">
                <area target="" class="aparking" id="HC25" building="HC25" full="accessible parking" alt="HC26" title="HC26" href="" coords="3307,403,3375,468" shape="rect">
            
            </map>

        </div>
    </div>
    </div>
    <div id="details_box" class="col-sm-6">
    <h3 id="details_title"></h3>
    <p id="details_info"></p>
    <p id="details_link"></p>
    </div>
    <div class="col-sm-6">
    </div>
    <script>
    var image_map = document.getElementById('image_map');
    Array.from(image_map.children).forEach(e => {
        e.removeAttribute("title");
    })
    </script>
    <button name="mainMenu" onclick="main_menu()" id="main-menu-btn">Main Menu</button>
</div> 
`;
