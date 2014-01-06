using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngularDemoApp.Model;

namespace STA_MQCMWeb.Ashx
{
    /// <summary>
    /// UserJsHandler 的摘要说明
    /// </summary>
    public class UserJsHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //string CustomerId = context.Request["CustomerId"].ToString();
            string jscontent = 
                @"  var userInfo = {{ badge:'{0}',userName:'{1}',roleName:'{2}',roleID:'{3}'}};";//JSFileWriter.GetJS(CustomerId); // This function will return my custom js string

            //jscontent = string.Format(jscontent, "006848", "shining", "IT");

            //SSOUtil su = new SSOUtil();
            UserInfor u = new UserInfor();// su.GetUser();
            u.Badge = "test";
            u.Name = "test";
            jscontent = string.Format(jscontent, u.Badge, u.Name, u.RoleName, u.RoleID);


            context.Response.ContentType = "application/javascript";
            context.Response.Write(jscontent);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}