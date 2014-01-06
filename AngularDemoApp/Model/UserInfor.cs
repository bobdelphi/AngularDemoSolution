using System;
using System.Collections.Generic;
using System.Text;

namespace AngularDemoApp.Model
{
    [Serializable]
    public class UserInfor
    {

        public static string r_Anal = "分析部";
        public static string r_Pur="采购部";
        public static string r_Dev="研发部";
        public static string r_Admin = "账户管理员";


        int jdeID;

        public int JdeID
        {
            get { return jdeID; }
            set { jdeID = value; }
        }

        string director;

        public string Director
        {
            get { return director; }
            set { director = value; }
        }

        string roomNo;

        public string RoomNo
        {
            get { return roomNo; }
            set { roomNo = value; }
        }



        string mail;

        public string Mail
        {
            get { return mail; }
            set { mail = value; }
        }

        string badge;

        public string Badge
        {
            get { return badge; }
            set { badge = value; }
        }

        string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
      

        string phone;

        public string Phone
        {
            get { return phone; }
            set { phone = value; }
        }

        string fax;

        public string Fax
        {
            get { return fax; }
            set { fax = value; }
        }

        string roleID;

        public string RoleID
        {
            get { return roleID; }
            set { roleID = value; }
        }

        string roleName;

        public string RoleName
        {
            get { return roleName; }
            set { roleName = value; }
        }

        string deptName;

        public string DeptName
        {
            get { return deptName; }
            set { deptName = value; }
        }

        string compantName;

        public string CompanyName
        {
            get { return compantName; }
            set { compantName = value; }
        }


        string compantCode;

        public string CompanyCode
        {
            get { return compantCode; }
            set { compantCode = value; }
        }

        public override bool Equals(object obj)
        {
            if (obj.GetType() != typeof(UserInfor))
                return false;

            UserInfor u = (UserInfor)obj;
            return (this.jdeID == u.jdeID);
        }

        string groupLeaderBadge;

        public string GroupLeaderBadge
        {
            get { return groupLeaderBadge; }
            set { groupLeaderBadge = value; }
        }


        string groupLeader;

        public string GroupLeader
        {
            get { return groupLeader; }
            set { groupLeader = value; }
        }

        string groupLeaderMail;

        public string GroupLeaderMail
        {
            get { return groupLeaderMail; }
            set { groupLeaderMail = value; }
        }

        string directorBadge;

        public string DirectorBadge
        {
            get { return directorBadge; }
            set { directorBadge = value; }
        }

     
        string directorMail;

        public string DirectorMail
        {
            get { return directorMail; }
            set { directorMail = value; }
        }
      


        public override int GetHashCode()
        {
            return this.jdeID;
        }

        //bool isGroupLeader;

        //public bool IsGroupLeader
        //{
        //    get { return isGroupLeader; }
        //    set { isGroupLeader = value; }

        //}

   

    }
}
