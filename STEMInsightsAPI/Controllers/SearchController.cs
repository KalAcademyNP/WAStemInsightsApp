using STEMInsightsAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace STEMInsightsAPI.Controllers
{
    public class SearchController : ApiController
    {
        // GET: api/Search/5
        [HttpGet]
        public IEnumerable<SearchResult> SearchJobDemands([FromUri] string title, [FromUri] string educationalLevel, [FromUri]string county)
        {
            try
            {
                var db = new WAStemModel();
                if (string.IsNullOrEmpty(title))
                    title = "";
                else
                    title = title.Replace("'", "''");
                if (string.IsNullOrEmpty(educationalLevel))
                    educationalLevel = "";
                else
                    educationalLevel = educationalLevel.Replace("'", "''");

                var titleParam = new SqlParameter("@title", title);
                var educationalLevelParam = new SqlParameter("@educationalLevel", educationalLevel);
                var countyParam = new SqlParameter("@county", county);
                return db.Database.SqlQuery<SearchResult>("sp_SearchForDemand @title, @educationalLevel, @county", titleParam, educationalLevelParam, countyParam);

            }
            catch (Exception)
            {
                return null;
            }
        }


        [HttpGet]
        public IEnumerable<TrendResult> GetJobTrends()
        {
            try
            {
                var db = new WAStemModel();
                return db.Database.SqlQuery<TrendResult>("sp_GetJobTrends");
            }
            catch (Exception)
            {
                return null;
            }
        }


        [HttpGet]
        public IEnumerable<SearchResult> GetJobTrendsDetail([FromUri]string educationalLevel)
        {
            try
            {
                var db = new WAStemModel();
                if (string.IsNullOrEmpty(educationalLevel))
                    educationalLevel = "";
                else
                    educationalLevel = educationalLevel.Replace("'", "''");
                var titleParam = new SqlParameter("@title", "");
                var educationalLevelParam = new SqlParameter("@educationalLevel", educationalLevel);
                var countyParam = new SqlParameter("@county", "ALL");
                return db.Database.SqlQuery<SearchResult>("sp_SearchForDemand @title, @educationalLevel, @county", titleParam, educationalLevelParam, countyParam);

            }
            catch (Exception)
            {
                return null;
            }
        }

        public IEnumerable<string> GetOccupationalTitles()
        {
            try
            {
                var db = new WAStemModel();
                return db.Database.SqlQuery<String>("sp_GetOccupationalTitles");
            }
            catch (Exception)
            {
                return null;
            }
        }


        public IEnumerable<string> GetEducationalLevels()
        {
            try
            {
                var db = new WAStemModel();
                return db.Database.SqlQuery<String>("sp_GetEducationalLevels");
            }
            catch (Exception)
            {
                return null;
            }

        }

        [HttpGet]
        public IEnumerable<string> GetJobCategories()
        {
            try
            {
                var db = new WAStemModel();
                
                return db.Database.SqlQuery<String>("sp_GetJobCategories");
            }
            catch (Exception)
            {
                return null;
            }
        }
        // POST: api/Search
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Search/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Search/5
        public void Delete(int id)
        {
        }
    }
}
