var init = function () {
    //console.log("JSON: ", dataWA);
    //getTitle pulls JSON data from wa.json file that's loaded in a script tag in Index.cshtml
    getTitle();
    function getTitle() {
        var titlesUlContent = "";
        dataWA.forEach(function (element) {
            var li = "<option value=\"" + element.OCCTITLE + "\">" + element.OCCTITLE + "</option>";
            titlesUlContent += li;
        })
        $("#titlesUl").append(titlesUlContent);
    };


    /* getTitles().done(function (titles) {
        var titlesUlContent = "";
        titles.forEach(function (title) {
           var li = "<option value=\"" + title + "\">" + title + "</option>";
            titlesUlContent += li;
         }); */
    //    $("#titlesUl").append(titlesUlContent);

    //getEducationLevels();

 /*   getEducationLevel();
    function getEducationLevel() {
        var levelsUlContent = "";
        console.log("DATA", dataWA);
        dataWA.forEach(function (element) {
            console.log(element.EDLEVEL);
            var li = "<option value=\"" + element.EDLEVEL + "\">" + element.EDLEVEL + "</option>";
            levelsUlContent += li;
        })
        $("#levelsUl").append(levelsUlContent);
    };
    */
/*
       getEducationalLevels().done(function (levels) {
            var levelsUlContent = "";
            levels.forEach(function (level) {
                var li = "<option value=\"" + level + "\">" + level + "</option>";
                levelsUlContent += li;
            });
           // $("#levelsUl").append(levelsUlContent);
        }).fail(function (error) {
            console.log("failed to get the levels");
        })

        getJobCategories().done(function (job_categories) {
            var categoriesUlContent = "";
            job_categories.forEach(function (category) {
                var li = "<option value=\"" + category + "\">" + category + "</option>";
                categoriesUlContent += li;
            });
            $("#categoriesUl").append(categoriesU1Content);
        }).fail(function (error) {
            console.log("ERROR", Object.keys(error));
            console.log("the error is", error.error, error.responseText);
        })
    }).fail(function (error) {
        console.log("failed to get the titles");
    });

    $("#searchBtn").click(function (event) {
        $('#spinner').show();
        var county = $("#regionUl").val();
        var title = $("#titlesUl").val();
        var level = $("#levelsUl").val();
        searchJobs(county, title, level).done(function (searchResults) {
            var htmlResults = renderResults(searchResults);
            $('#spinner').hide();
            $("#searchResults").html(htmlResults);
        }).fail(function (error) { console.log("failed to call the search api: ", error); });
    });
*/

    $("#searchBtn").click(function (event) {
        console.log("heard a click");
        $('#spinner').show();
        var county = $("#regionUl").val();
        var title = $("#titlesUl").val();
        var level = $("#levelsUl").val();
        console.log("level on click:", level)
        var searchResult = searchJob(county, title, level);
        console.log("searchResult: ", searchJob(county, title, level));
        var htmlResults = renderResults(searchResult);
        $('#spinner').hide();
        $("#searchResults").html(htmlResults);
    })

}
function renderResults(arr) {
    
    var result = "<span class='results-title'>We found " + arr.length + " records!</span><br>";
    if (arr.length > 0) {
  
        result += '<table class="table table-striped resultsTable" width="100%"><tr class="results-table-row"><td>'
                             + 'Job Category </td><td>'
                             + 'Job Title <span id="job-title" class="glyphicon glyphicon-question-sign"></span></td><td>'
                             + 'Annual Median Salary($) <span id="ams" class="glyphicon glyphicon-question-sign"></span></td><td>'
                             + 'Median Hourly Wage($) <span id="mhw" class="glyphicon glyphicon-question-sign"></span></td><td>'
                             + 'Entry Education Level <span id="eel" class="glyphicon glyphicon-question-sign"></span></td><td>'
                             + 'Total Jobs Added </td><td>'
                             + 'Average Annual Growth Rate(%)</td><td>'
                             + 'Average Annual Job Openings <span id="aajo"class="glyphicon glyphicon-question-sign"></span></td><td>'
                             + 'Estimated Employment 2014 </td><td>'
                             + 'Estimated Employment 2024 <span id="estimated-employment" class="glyphicon glyphicon-question-sign"></span></td>'
                             + '</tr>';
    }

    $.each(arr, function (index, data) {
        var avg = data.AVGGRW1424;
        //var avg = data.AverageAnnualGrowthRate;
        var avgN = parseFloat(avg);
        if (isNaN(avgN)) {
            avg = "";
        } else {
            avgN = Math.round(avgN * 10000) / 100
            avg = avgN + "";
        }

        result += '<tr><td>'
       // console.log("DATA: ", data);
      //  DATA WAGECAT,EDCAT,RATING,STEMFLAG,SOC,OCCTITLE,AVGWAGE,50THPERWAGE,ANNMEDSAL,MEDHRLYWAGE,EDLEVEL,DD,INDUSTRY,
        // OCCCAT,ESTEMP2014,ESTEMP2024,JOBSADD1424,GROWTH1419,GROWTH1924,AVGGRW1424,ANNOPEN1419,ANNOPEN1924,ANNOPEN1424,ONET,county
      //  console.log("title: ", data.OCCTITLE);
                                + data.OCCCAT + '</td><td>'
                                + data.OCCTITLE + '</td><td>'
                                + data.ANNMEDSAL + '</td><td>'
                                + data.MEDHRLYWAGE + '</td><td>'
                                + data.EDLEVEL + '</td><td>'
                                + data.JOBSADD1424 + '</td><td>'
                                + avg + '</td><td>'
                                + data.ANNOPEN1419 + '</td><td>'
                                + data.ESTEMP2014 + '</td><td>'
                                + data.ESTEMP2024 + '</td>'
                                + '</tr>';
                            /* + data.JobTitle + '</td><td>'
                             + data.OccupationalTitle + '</td><td>'
                             + data.AnnualMedianSalary + '</td><td>'
                             + data.MedianHourlyWage + '</td><td>'
                             + data.EntryEducationLevel + '</td><td>'
                             + data.TotalJobsAdded + '</td><td>'
                             + avg + '</td><td>'
                             + data.AverageAnnualJobOpenings + '</td><td>'
                             + data.EstimatedEmployment2014 + '</td><td>'
                             + data.EstimatedEmployment2024 + '</td>'                        
                             + '</tr>'; */
    });

    result += "</table>";
    return result;
}
