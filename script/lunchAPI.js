// var APIrequest = "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=f72d6690d0f54631beec677ec932846b&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010132&MMEAL_SC_CODE=2&MLSV_YMD=20211018";

$.ajax({
    method: "GET",
    url: "https://open.neis.go.kr/hub/mealServiceDietInfo",
    data: {  
    KEY: "f72d6690d0f54631beec677ec932846b",
    Type: "json",
    pindex : 1,
    pSize : 5,
    ATPT_OFCDC_SC_CODE : "B10",
    SD_SCHUL_CODE : 7010132,
    MMEAL_SC_CODE : 2,
    MLSV_YMD : 20211018},
})
    .done(function(json) {
    $("<h1>").text(json.mealServiceDietInfo[1].row[0].DDISH_NM).appendTo("body");
    $("<div class=\"content\">").html(json.html).appendTo("body");
});