getRegions = function(){
    var regions = [{ key: "WA", value: "ALL" }, { key: "SPOK", value: "SPOKANE" }, { key: "YAK", value: "YAKIMA" }, { key: "VANC", value: "VANCOUVER" }, { key: "KING", value: "KING" }, { key: "SNO", value: "SNOHOMISH" }];
    return regions;
};

getEducationLevels = function () {
    var eduLevels = ['Bachelor\'s degree', 'Doctoral or professional degree', 'High school diploma or equivalent', 'Some college, no degree', 'Postsecondary nondegree award', 'No formal educational credential', 'Apprenticeship', 'Master\'s degree', 'Associate\'s degree'];
    return eduLevels;
}

searchJobs = function (county, title, level, category) {
    var params = "";
    
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
    if (category != null) {
        params += "&category=" + category;
    } else {
        params += "&category=";
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


getTitles = function () {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/search/getoccupationaltitles"
    });
};

getEducationalLevels = function () {
    return $.ajax({
       url: "http://steminsightsapi.azurewebsites.net/api/Search/GetEducationalLevels"
    });
};


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

