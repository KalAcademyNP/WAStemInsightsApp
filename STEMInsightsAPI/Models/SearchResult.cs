using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace STEMInsightsAPI.Models
{
    public class SearchResult
    {
        public string OccupationalTitle { get; set; }

        public string EntryEducationLevel { get; set; }

        public string DemandStatus { get; set; }

        public double? EstimatedEmployment2014 { get; set; }

        public double? EstimatedEmployment2024 { get; set; }

        public double? TotalJobsAdded { get; set; }

        public double? AverageAnnualGrowthRate { get; set; }

        public double? AverageAnnualJobOpenings { get; set; }

        public decimal? AnnualMedianSalary { get; set; }

        public decimal? MedianHourlyWage { get; set; }

    }
}