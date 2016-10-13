namespace STEMInsightsAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class WAStemModel : DbContext
    {
        public WAStemModel()
            : base("name=WAStemModel")
        {
        }

        public virtual DbSet<KING> KINGs { get; set; }
        public virtual DbSet<SNO> SNOes { get; set; }
        public virtual DbSet<SPOK> SPOKs { get; set; }
        public virtual DbSet<VANC> VANCs { get; set; }
        public virtual DbSet<WA> WAs { get; set; }
        public virtual DbSet<YAK> YAKs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<KING>()
                .Property(e => e.AVERAGE_WAGE)
                .HasPrecision(19, 4);

            modelBuilder.Entity<KING>()
                .Property(e => e.C50TH__)
                .HasPrecision(19, 4);

            modelBuilder.Entity<KING>()
                .Property(e => e.ANNUAL_MEDIAN_SALARY)
                .HasPrecision(19, 4);

            modelBuilder.Entity<KING>()
                .Property(e => e.MEDIAN_HOURLY_WAGE)
                .HasPrecision(19, 4);

            modelBuilder.Entity<SNO>()
                .Property(e => e.AVERAGE_WAGE)
                .HasPrecision(19, 4);

            modelBuilder.Entity<SNO>()
                .Property(e => e.C50TH__)
                .HasPrecision(19, 4);

            modelBuilder.Entity<SNO>()
                .Property(e => e.ANNUAL_MEDIAN_SALARY)
                .HasPrecision(19, 4);

            modelBuilder.Entity<SNO>()
                .Property(e => e.MEDIAN_HOURLY_WAGE)
                .HasPrecision(19, 4);


            modelBuilder.Entity<VANC>()
                .Property(e => e.AVERAGE_WAGE)
                .HasPrecision(19, 4);

            modelBuilder.Entity<VANC>()
                .Property(e => e.C50TH__)
                .HasPrecision(19, 4);

            modelBuilder.Entity<VANC>()
                .Property(e => e.ANNUAL_MEDIAN_SALARY)
                .HasPrecision(19, 4);

            modelBuilder.Entity<VANC>()
                .Property(e => e.MEDIAN_HOURLY_WAGE)
                .HasPrecision(19, 4);

            modelBuilder.Entity<WA>()
                .Property(e => e.AVERAGE_WAGE)
                .HasPrecision(19, 4);

            modelBuilder.Entity<WA>()
                .Property(e => e.C50TH__)
                .HasPrecision(19, 4);

            modelBuilder.Entity<WA>()
                .Property(e => e.ANNUAL_MEDIAN_SALARY)
                .HasPrecision(19, 4);

            modelBuilder.Entity<WA>()
                .Property(e => e.MEDIAN_HOURLY_WAGE)
                .HasPrecision(19, 4);

        }
    }
}
