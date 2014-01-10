using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PetaPoco;


namespace AngularDemoApp.Model
{
    [TableName("SendMailHistory")]
    [PrimaryKey("id")]
    [ExplicitColumns]
    public class SendMailHistory
    {

        public SendMailHistory()
        {


        }


        [Column]
        public int Id { get; set; }
        [Column]
        public string Createip { get; set; }
        [Column]
        public string Createuserid { get; set; }
        [Column]
        public DateTime Createdatetime { get; set; }
        [Column]
        public string Updateip { get; set; }
        [Column]
        public string Updateid { get; set; }
        [Column]
        public DateTime Updatedatetime { get; set; }
        [Column]
        public string Linkdb { get; set; }
        [Column]
        public int Linkid { get; set; }
        [Column]
        public string SubDBLinkIdValue { get; set; }
        [Column]
        public Guid G_id { get; set; }
        [Column]
        public string Mailid { get; set; }
        [Column]
        public string From1 { get; set; }
        [Column]
        public string To1 { get; set; }
        [Column]
        public string Cc1 { get; set; }
        [Column]
        public string Bcc1 { get; set; }
        [Column]
        public string Subject1 { get; set; }
        [Column]
        public string Body1 { get; set; }
        [Column]
        public string MailType { get; set; }
        [Column]
        public string ServerIP { get; set; }
    }


    public class SendMailQInfo
    {
        /*
        public string To { get; set; }
  
        public string Cc { get; set; }
       
      
        public string Subject { get; set; }

        public string Body { get; set; }

        public string MailType { get; set; }
        */

        public string Subject { get; set; }

        public string MailTo { get; set; }
        public string MailType { get; set; }
        public DateTime? SDate { get; set; }
        public DateTime? EDate { get; set; }
        public int Rows { get; set; }
        public int Page { get; set; }
        public string Sort { get; set; }
        public string Order { get; set; }


    }
}


