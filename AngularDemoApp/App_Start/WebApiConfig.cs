using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Newtonsoft.Json.Converters;

namespace AngularDemoApp
{
    public static class WebApiConfig
    {

        class CustomDateTimeConverter : IsoDateTimeConverter
        {
            public CustomDateTimeConverter()
            {
                base.DateTimeFormat = "yyyy'-'MM'-'dd";
            }
        }

        public static void Register(HttpConfiguration config)
        {
            /*
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
             */
            config.Routes.MapHttpRoute(
                     name: "ApiByAction",
                     routeTemplate: "api/{controller}/{action}/{id}",
                     defaults: new { id = RouteParameter.Optional }
                 );


            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api-rest/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //config.Formatters.JsonFormatter.SerializerSettings.Converters.Add(new CustomDateTimeConverter());
        }
    }
}
