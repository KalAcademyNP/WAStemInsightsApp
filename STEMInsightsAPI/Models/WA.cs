namespace STEMInsightsAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("WA")]
    public partial class WA
    {
        public int Id { get; set; }

        [Column("WAGE (H,M,L)")]
        [StringLength(255)]
        public string WAGE__H_M_L_ { get; set; }

        [Column("ED (H,M,L)")]
        [StringLength(255)]
        public string ED__H_M_L_ { get; set; }

        [Column("RATING_(3 = DEMAND, 2 = BALANCED, 1 = DECLINE)")]
        public double? RATING__3___DEMAND__2___BALANCED__1___DECLINE_ { get; set; }

        [Column("STEM FLAG")]
        [StringLength(255)]
        public string STEM_FLAG { get; set; }

        [StringLength(255)]
        public string SOC { get; set; }

        [Column("OCCUPATIONAL TITLE")]
        [StringLength(255)]
        public string OCCUPATIONAL_TITLE { get; set; }

        [Column("AVERAGE WAGE", TypeName = "money")]
        public decimal? AVERAGE_WAGE { get; set; }

        [Column("50TH %", TypeName = "money")]
        public decimal? C50TH__ { get; set; }

        [Column("ANNUAL MEDIAN SALARY", TypeName = "money")]
        public decimal? ANNUAL_MEDIAN_SALARY { get; set; }

        [Column("MEDIAN HOURLY WAGE", TypeName = "money")]
        public decimal? MEDIAN_HOURLY_WAGE { get; set; }

        [Column("ENTRY EDUCATIONAL LEVEL (BLS)")]
        [StringLength(255)]
        public string ENTRY_EDUCATIONAL_LEVEL__BLS_ { get; set; }

        [Column("DEMAND DECLINE")]
        [StringLength(255)]
        public string DEMAND_DECLINE { get; set; }

        [Column("INDUSTRY SECTOR")]
        [StringLength(255)]
        public string INDUSTRY_SECTOR { get; set; }

        [Column("OCCUPATIONAL CATEGORY")]
        [StringLength(255)]
        public string OCCUPATIONAL_CATEGORY { get; set; }

        [Column("ESTIMATED EMPLOYMENT 2014")]
        public double? ESTIMATED_EMPLOYMENT_2014 { get; set; }

        [Column("ESTIMATED EMPLOYMENT 2024")]
        public double? ESTIMATED_EMPLOYMENT_2024 { get; set; }

        [Column("TOTAL JOBS ADDED 2014-2024")]
        public double? TOTAL_JOBS_ADDED_2014_2024 { get; set; }

        [Column("  Average annual growth rate 2014-2019")]
        public double? C__Average_annual_growth_rate_2014_2019 { get; set; }

        [Column("  Average annual growth rate 2019-2024")]
        public double? C__Average_annual_growth_rate_2019_2024 { get; set; }

        [Column("AVERAGE ANNUAL GROWTH RATE 2014-2024")]
        public double? AVERAGE_ANNUAL_GROWTH_RATE_2014_2024 { get; set; }

        [Column("  AVERAGE ANNUAL TOTAL OPENINGS  2014-2019")]
        public double? C__AVERAGE_ANNUAL_TOTAL_OPENINGS__2014_2019 { get; set; }

        [Column("  AVERAGE ANNUAL TOTAL OPENINGS  2019-2024")]
        public double? C__AVERAGE_ANNUAL_TOTAL_OPENINGS__2019_2024 { get; set; }

        [Column("AVERAGE ANNUAL JOB  OPENINGS 2014-2024")]
        public double? AVERAGE_ANNUAL_JOB__OPENINGS_2014_2024 { get; set; }

        //[StringLength(255)]
        //public string F23 { get; set; }

        [Column("ONET LINK: Provides Job Description, Samples of reported Job Tit")]
        [StringLength(255)]
        public string ONET_LINK__Provides_Job_Description__Samples_of_reported_Job_Tit { get; set; }
    }
}
