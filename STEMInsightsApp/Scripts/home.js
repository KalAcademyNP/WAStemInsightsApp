init = function () {
    getTitles().done(function (titles) {
        var titlesUlContent = "";
        titles.forEach(function (title) {
            var li = "<option value=\"" + title + "\">" + title + "</option>";
            titlesUlContent += li;
        });
        $("#titlesUl").append(titlesUlContent);
        getEducationalLevels().done(function (levels) {
            var levelsUlContent = "";
            levels.forEach(function (level) {
                var li = "<option value=\"" + level + "\">" + level + "</option>";
                levelsUlContent += li;
            });
            $("#levelsUl").append(levelsUlContent);
        }).fail(function (error) {
            console.log("failed to get the levels");
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
        }).fail(function (error) { console.log("failed to call the search api"); });
    });

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
        var avg = data.AverageAnnualGrowthRate;
        var avgN = parseFloat(avg);
        if (isNaN(avgN)) {
            avg = "";
        } else {
            avgN = Math.round(avgN * 10000) / 100
            avg = avgN + "";
        }

        result += '<tr><td>'
        //console.log("DATA", Object.keys(data));
                             + data.JobTitle + '</td><td>'
                             + data.OccupationalTitle + '</td><td>'
                             + data.AnnualMedianSalary + '</td><td>'
                             + data.MedianHourlyWage + '</td><td>'
                             + data.EntryEducationLevel + '</td><td>'
                             + data.TotalJobsAdded + '</td><td>'
                             + avg + '</td><td>'
                             + data.AverageAnnualJobOpenings + '</td><td>'
                             + data.EstimatedEmployment2014 + '</td><td>'
                             + data.EstimatedEmployment2024 + '</td>'                        
                             + '</tr>';
    });

    result += "</table>";
    return result;
}
