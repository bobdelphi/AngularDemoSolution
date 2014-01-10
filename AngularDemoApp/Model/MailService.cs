using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PetaPoco;
using System.Net.Http;

namespace AngularDemoApp.Model
{
    /// <summary>
    ///MailService 的摘要说明
    /// </summary>
    public class MailService
    {
        public MailService()
        {
            //
            //TODO: 在此处添加构造函数逻辑
            //
        }

        public SendMailHistory getSendMailHistoryByID(string id)
        {
            Database db = new PetaPoco.Database("server=10.80.20.241;uid=wuxiappsa;pwd=wuxiappsa@2012;database=SendMailHistoryDB", "System.Data.SqlClient");
            return db.Single<SendMailHistory>(" where id = @0 ", id);
        }

      

        public Page<SendMailHistory> getPageMail(
            string subject, string mailTo, string mailType, DateTime? startDate, DateTime? enddate,

            long itemsPerPage, long page, string sort, string order)
        {

            Database db = new PetaPoco.Database("server=10.80.20.241;uid=wuxiappsa;pwd=wuxiappsa@2012;database=SendMailHistoryDB", "System.Data.SqlClient");

            Sql sql = new Sql(@"select 
    [id]
      ,[createip]
      ,[createuserid]
      ,[createdatetime]
      ,[updateip]
      ,[updateid]
      ,[updatedatetime]
      ,[linkdb]
      ,[linkid]
      ,[SubDBLinkIdValue]
      ,[G_id]
      ,[mailid]
      ,[from1]
      ,[to1]
      ,[cc1]
      ,[bcc1]
      ,[subject1]
     -- ,[body1]
      ,[mailType]
      ,[serverIP]

from SendMailHistory where 1 = 1");

            if (!string.IsNullOrEmpty(subject))
                sql.Append("and subject1 like @0", "%" + subject + "%");

            if (!string.IsNullOrEmpty(mailTo))
                sql.Append("and ( to1 like @0 or cc1 like @0 )", "%" + mailTo + "%");

            if (!string.IsNullOrEmpty(mailType))
                sql.Append("and mailType like @0", "%" + mailType + "%");

            if (startDate.HasValue)
                sql.Append("and createdatetime >= @0", startDate);

            if (enddate.HasValue)
                sql.Append("and createdatetime < @0", enddate.Value.AddDays(1));

            if (!string.IsNullOrEmpty(sort))
                sql.Append(string.Format(" order by {0} {1}", sort, order));

            Page<SendMailHistory> a = db.Page<SendMailHistory>(page, itemsPerPage, sql);

            return a;
        }
    }
}