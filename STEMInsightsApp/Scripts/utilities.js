﻿getRegions = function(){
    var regions = [{ key: "WA", value: "ALL" }, { key: "SPOK", value: "SPOKANE" }, { key: "YAK", value: "YAKIMA" }, { key: "VANC", value: "VANCOUVER" }, { key: "KING", value: "KING" }, { key: "SNO", value: "SNOHOMISH" }];
    return regions;
};

getEducationLevels = function () {
    var eduLevels = ['Bachelor\'s degree', 'Doctoral or professional degree', 'High school diploma or equivalent', 'Some college, no degree', 'Postsecondary nondegree award', 'No formal educational credential', 'Apprenticeship', 'Master\'s degree', 'Associate\'s degree'];
    return eduLevels;
}

searchJobs = function (county, title, level) {
    var params = "";
    //add job category here
    
    if (title != null) {
        params += "title=" + title;
    } else {
        params += "title=";
    }

    if (level != null) {
        params += "&educationalLevel=" + level;
    } else {
        params += "&educationalLevel=";
    }
    if (county != null) {
        params += "&county=" + county;
    } else {
        params += "&county=" + county;
    }

    var url = "http://steminsightsapi.azurewebsites.net/api/Search/SearchJobDemands/?" + params;
    
    return $.ajax({
        url: url,
    });
};

getJobCategories = function () {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/Search/GetJobCategories"
    });
};
//console.log("JSON: ", dataWA);
//getTitle = function () {
 //   dataWA.forEach(function (element) {
 //       element = element.OCCTITLE;
      //  console.log("element.title", element.OCCTITLE);
 //   })
//};


//getTitles = function () {
 //   return $.ajax({
 //       url: "http://steminsightsapi.azurewebsites.net/api/Search/GetOccupationalTitles"
 //   });
//};

//getEducationalLevels = function () {
//    return $.ajax({
//       url: "http://steminsightsapi.azurewebsites.net/api/Search/GetEducationalLevels"
//    });
//};


var getJobTrends = function () {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/Search/GetJobTrends"
    });
}

var getJobTrendsDetail = function (level) {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/Search/GetJobTrendsDetail/?educationalLevel="+level
    });
}
var getJobCategories = function () {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/Search/GetJobCategories"
    })
}

