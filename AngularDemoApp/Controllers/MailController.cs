using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PetaPoco;
using AngularDemoApp.Model;

namespace AngularDemoApp.Controllers
{
    public class MailController : ApiController
    {
        // GET api/data
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/data/5
        public string Get(int id)
        {
            return "value";
        }

        public static Dictionary<string, string> GetQueryStrings(HttpRequestMessage request)
        {
            return request.GetQueryNameValuePairs()
                          .ToDictionary(kv => kv.Key, kv => kv.Value, StringComparer.OrdinalIgnoreCase);
        }

        [HttpPost]
        public Page<SendMailHistory> Page(SendMailQInfo q)
        {
            /*
            long page = 1;
            if (Request["page"] != null)
                page = long.Parse(context.Request.Form["page"].ToString());
            long rows = 20;
            if (Request.Form["rows"] != null)
                rows = long.Parse(context.Request.Form["rows"].ToString());

            string sort = string.Empty;
            if (context.Request.Form["sort"] != null)
                sort = context.Request.Form["sort"].ToString();

            string order = string.Empty;
            if (context.Request.Form["order"] != null)
                order = context.Request.Form["order"].ToString();

            string subject = context.Request.Form["subject"].ToString();

            string mailto = context.Request.Form["mailto"].ToString();

            string mailtype = context.Request.Form["mailtype"].ToString();


            DateTime? sDate = null;
            string senddate_s = context.Request.Form["senddate-s"].ToString();
            if (!string.IsNullOrEmpty(senddate_s))
                sDate = DateTime.Parse(senddate_s);
            DateTime? eDate = null;
            string senddate_e = context.Request.Form["senddate-e"].ToString();
            if (!string.IsNullOrEmpty(senddate_e))
                eDate = DateTime.Parse(senddate_e);
            */
            Dictionary<string, string> dict = GetQueryStrings(this.Request);
            MailService m = new MailService();
            var list = m.getPageMail(
                 q.Subject,
               q.MailTo,
                q.MailType,
                q.SDate,
                 q.EDate,
                q.Rows,
                 q.Page,
                 q.Sort,
                 q.Order);
           //Newtonsoft.Json.Converters.IsoDateTimeConverter c = new Newtonsoft.Json.Converters.IsoDateTimeConverter { DateTimeFormat = "yyyy-MM-dd HH:mm:ss" };
            //config.Formatters.JsonFormatter.SerializerSettings.Converters.Add(c));
            return list;
        }

        // POST api/data
        public void Post([FromBody]string value)
        {
        }

        // PUT api/data/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/data/5
        public void Delete(int id)
        {
        }
    }
}
