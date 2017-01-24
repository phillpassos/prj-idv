using System.Data.Linq;
using System.Data.SqlClient;

namespace prj_idv.Services.Classes
{
    public class Db
    {
        public DataContext GetConn()
        {
            const string conStr = @"Data Source=(LocalDB)\v11.0;
                                AttachDbFilename=metas.mdf;
                                Integrated Security=True";

            var con = new SqlConnection {ConnectionString = conStr};
            con.Open();

            return new DataContext(con);
        }
        /*
            var result = dc.ExecuteQuery<tes>(queryString);

            con.Close();*/
    }
}
