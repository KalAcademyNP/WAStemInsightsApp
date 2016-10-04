    getJobTrends().done(function (trend) {
        console.log("retrieved trend")
        console.log(trend)
        var root = {
            "name": "EducationLevels",
            "children": trend
        };
        var classes = [];

        function recurse(name, node) {
            if (node.children) node.children.forEach(function (child) { recurse(node.Name, child); });
            else classes.push({ packageName: name, className: node.Name, value: Math.round(node.Size) });
        }

        recurse(null, root);
        result = { children: classes };
        console.log(result);
        var r = 560,
            format = d3.format(",d"),
            fill = d3.scale.category20c();

        var bubble = d3.layout.pack()
            .sort(null)
            .size([r, r])
            .padding(1.5);

        var vis = d3.select("#chart").append("svg")
            .attr("width", r)
            .attr("height", r)
            .attr("class", "bubble");


        var tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .style("color", "white")
            .style("padding", "8px")
            .style("background-color", "rgba(0, 0, 0, 0.75)")
            .style("border-radius", "6px")
            .style("font", "12px sans-serif")
            .text("tooltip");

        var node = vis.selectAll("g.node")
            .data(bubble.nodes(result)
            .filter(function (d) { return !d.children; }))
          .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

        //node.append("title")
        //    .text(function (d) { return d.className + ": " + format(d.value); });

        node.append("circle")
            .attr("r", function (d) { return d.r; })
            //.style("fill", function (d) { return d3.rgb(255, d.value % 255, 0); }) //shades of orange, yellow, red
            .style("fill", function (d) { return fill(d.value); }) // For random colors
            .on("mouseover", function(d) {
                tooltip.text(d.className + ": " + format(d.value));
                tooltip.style("visibility", "visible");
                d3.select(this).style("cursor", "pointer");
            })
      .on("mousemove", function() {
          return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on("mouseout", function () {
          d3.select(this).style("cursor", "pointer");
          return tooltip.style("visibility", "hidden");
      })
        .on("click", function (d) {
            console.log(d)
            console.log(d.className + "Got Clicked!");
            getJobTrendsDetail(d.className).done(function (jobDetail) {
                /*Show the table for hte job details**/
                console.log(jobDetail.length)
                var htmlResults = renderResults(jobDetail);

                $("#searchResults").html(htmlResults);
            })
        });

        node.append("text")
                    .attr("text-anchor", "middle")
                    .attr("dy", ".3em")
                    .style("fill", "white")
                    .style("word-wrap", "wrap")
                    .text(function (d) { return d.className.substring(0, (d.r / 3) - 2) + ".." });
    }).fail(function (error) {
        console.log("failed to get the trend");
    });

    function renderResults(arr) {

        var result = "<span style='font-size:9pt;color:#000000'>We found " + arr.length + " records!</span><br>";
        if (arr.length > 0) {
            result += '<table class="table table-striped" style="font-size:8pt;color:#000000;" width="100%"><tr style="font-weight:bold;"><td>'
                                 + 'Job Title</td><td>'
                                 + 'Annual Median Salary($)</td><td>'
                                 + 'Median Hourly Wage($)</td><td>'
                                 + 'Demand Status</td><td>'
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
                                 + data.DemandStatus + '</td><td>'
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
    function showTable(arr) {

        var result = "<span style='font-size:9pt;color:#000000'>We found " + arr.length + " records!</span><br>";
        if (arr.length > 0) {
            result += '<table class="table table-striped" style="font-size:8pt;color:#000000;" width="100%"><tr style="font-weight:bold;"><td>'
                                 + 'Annual Median Salary($)</td><td>'
                                 + 'Average Annual Growth Rate(%)</td><td>'
                                 + 'Average Annual Job Openings</td><td>'
                                 + 'Demand Status</td><td>'
                                 + 'Entry Education Level</td><td>'
                                 + 'Estimated Employment 2014</td><td>'
                                 + 'Estimated Employment 2024</td><td>'
                                 + 'Median Hourly Wage($)</td><td>'
                                 + 'Job Title</td><td>'
                                 + 'Total Jobs Added</td><td>'
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
                                 + data.DemandStatus + '</td><td>'
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