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
    
    var result = "<span style='font-size:9pt;color:#000000'>We found " + arr.length + " records!</span><br>";
    if (arr.length > 0) {
        result += '<table class="table table-striped" style="font-size:8pt;color:#000000;" width="100%"><tr style="font-weight:bold;"><td>'
                             + 'Job Title</td><td>'
                             + 'Annual Median Salary($)</td><td>'
                             + 'Median Hourly Wage($)</td><td>'
                             + 'Entry Education Level</td><td>'
                             + 'Total Jobs Added</td><td>'
                             + 'Average Annual Growth Rate(%)</td><td>'
                             + 'Average Annual Job Openings</td><td>'
                             + 'Estimated Employment 2014</td><td>'
                             + 'Estimated Employment 2024</td>'
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