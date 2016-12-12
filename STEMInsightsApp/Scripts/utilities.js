getRegions = function(){
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

searchJobWithCategory = function (category, county, title, level) {
    var result = [];
    if (category == "ALL") {
        console.log("category value here:", category);
        return searchJob(county, title, level);
    }
    else {
        if (county == "WA") {
            dataWA.forEach(function (element, index, array) {
                console.log(" category: ", category);
                if (element.OCCCAT === category) {
                    console.log("inside a WA search for category: ", category);
                    console.log(element.county, element.OCCTITLE, element.EDLEVEL);
                    result = searchJob("WA", element.OCCTITLE, element.EDLEVEL);
                }
            })
        }
    }
    return result;
}
searchJob = function (county, title, level) {
    console.log("searchJob");
    console.log("level: ", level);
    var result = [];
    if (title !== null && level !== null && county == "WA") {
        console.log("county value here: ", county);
        if (title == "ALL" && level !=="ALL") {
            dataWA.forEach(function (element, index, array) {
                
                if (element.EDLEVEL === level) {
                    console.log("Element ed level:", element.EDLEVEL);
                    result.push(element);
                }
            })
        }
        else if(level =="ALL" && title !== "ALL"){
            dataWA.forEach(function (element, index, array) {
                if(element.OCCTITLE === title){
                    result.push(element);
                }
            })
        }
        else if (level == "ALL" && title == "ALL"){
            dataWA.forEach(function (element, index, array) {
                    result.push(element);
                })
        }
        else {
            dataWA.forEach(function (element, index, array) {
                if (element.OCCTITLE === title && element.EDLEVEL === level) {
                    result.push(element);
                }
            })
        }
    }
    if (title !== null && level !== null && county !== "WA") {
        console.log("county value here: ", county);
        if (county == "SPOK") {
            allCounties.forEach(function (element, index, array) {
                if (element.county == "spokane") {
                    if (title == "ALL" && level !== "ALL") {
                        if (element.EDLEVEL === level) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title != "ALL") {
                        if (element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title == "ALL"){
                        result.push(element);
                    }
                    else {
                        if (element.EDLEVEL === level && element.OCCTITLE === title) {
                            result.push(element);
                        }    
                    }
                }
            });
        }
       
        if (county == "YAK") {
            allCounties.forEach(function (element, index, array) {
                if (element.county == "yakima") {
                    if (title == "ALL" && level !== "ALL") {
                        if (element.EDLEVEL === level) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title != "ALL") {
                        if (element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title == "ALL") {
                        result.push(element);
                    }
                    else {
                        if (element.EDLEVEL === level && element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                }
            });
        }

        if (county == "VANC") {
            allCounties.forEach(function (element, index, array) {
                if (element.county == "vancouver") {
                    if (title == "ALL" && level !== "ALL") {
                        if (element.EDLEVEL === level) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title != "ALL") {
                        if (element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title == "ALL") {
                        result.push(element);
                    }
                    else {
                        if (element.EDLEVEL === level && element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                }
            });
        }

        if (county == "KING") {
            allCounties.forEach(function (element, index, array) {
                if (element.county == "king") {
                    if (title == "ALL" && level !== "ALL") {
                        if (element.EDLEVEL === level) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title != "ALL") {
                        if (element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title == "ALL") {
                        result.push(element);
                    }
                    else {
                        if (element.EDLEVEL === level && element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                }
            });
        }

        if (county == "SNO") {
            allCounties.forEach(function (element, index, array) {
                if (element.county == "snohomish") {
                    if (title == "ALL" && level !== "ALL") {
                        if (element.EDLEVEL === level) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title != "ALL") {
                        if (element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                    else if (level == "ALL" && title == "ALL") {
                        result.push(element);
                    }
                    else {
                        if (element.EDLEVEL === level && element.OCCTITLE === title) {
                            result.push(element);
                        }
                    }
                }
            });
        }
    }

    //if (title !== null) {
    //    dataWA.forEach(function (element, index, array) {
    //        if (element.OCCTITLE === title) {
    //            result.push(element);
    //        }
    //    })
    //} if (level !== null) {
    //    console.log("level: ", level)
    //    dataWA.forEach(function (element, index, array) {
    //        //console.log("ELEMENT: ", element.EDLEVEL)
    //        if (element.EDLEVEL === level) {
    //            console.log("INDEX: ", index);
    //            console.log("ARRAY: ", array);
    //            console.log("ARRAY with index: ", array[index]);
    //            console.log("ELEMENT should have the right ed level: ", element);
    //            result.push(array[index]);
    //        }
    //    })
    //}
    //if (title == "ALL") {
    //    dataWA.forEach(function (element, index, array) {
    //        result.push(element);
    //    })
    //}
    console.log("result should be array", result);
    return result;
}



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

