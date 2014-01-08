using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using System.Net.Http.Headers;

namespace AngularDemoApp.Controllers
{
    public class CSVController : ApiController
    {
        // GET api/csv
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/csv/5
        public HttpResponseMessage GetFile()
        {

            //var path = @"C:\Temp\test.exe";
            var path = HttpContext.Current.Server.MapPath("~/Files/dept.txt");
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(path, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentType =
                new MediaTypeHeaderValue("application/octet-stream");
            return result;
        }

        // POST api/csv
        public HttpResponseMessage Post()
        {
            
            //var path = @"C:\Temp\test.exe";
            var path = HttpContext.Current.Server.MapPath("~/Files/dept.txt");
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(path, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentType =
                new MediaTypeHeaderValue("application/octet-stream");
            return result;
          
        }

        // PUT api/csv/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/csv/5
        public void Delete(int id)
        {
        }
    }
}
