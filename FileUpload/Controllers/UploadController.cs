using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FileUpload.Controllers
{
    public class UploadController : ApiController
    {
        // GET: api/Upload
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Upload/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Upload
        public HttpResponseMessage Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }



            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // PUT: api/Upload/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Upload/5
        public void Delete(int id)
        {
        }
    }
}
