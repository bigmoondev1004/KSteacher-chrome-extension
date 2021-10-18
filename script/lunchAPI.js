$(document).reaady(function(){
    var url = 'http://open.neis.go.kr/hub/schoolInfo?'
            +'ATPT_OFCDC_C_CODE=T10&Type=json&pIndex=1&pSize=100';
    var param = '';
    ajaxCallApiTest(url, param, ApiCallBack);
    });
    function ajaxCallApiTest(url, param, callback) {
        $.ajax({
        url: 'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=f72d6690d0f54631beec677ec932846b&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010132&MMEAL_SC_CODE=2&MLSV_YMD=20211018',
        async: true,
        type: "POST",
        data: param,
        dataType: 'json',
        success: callback,
        error:function (request,teextStatus){
            var format = new OpenLayers.Format.WFSDescribeFeatureType();
            var doc = request.responseXML;
            var describeFeatureType = format.read(doc);
            alert(" describeFeatureType = "+ describeFeatureType + " textStatus = "+textStatus);
        }
    });
}