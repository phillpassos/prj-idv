using System.ServiceModel;
using System.ServiceModel.Web;

namespace prj_idv.Services
{

    [ServiceContract]
    public partial interface IMetasService
    {
        [OperationContract]
        [
            WebInvoke(Method = "GET",
                ResponseFormat = WebMessageFormat.Json, UriTemplate = "sayo")
        ]
        string Sayo();
    }
}
