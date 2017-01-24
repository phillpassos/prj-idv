using System.ServiceModel;
using System.ServiceModel.Web;
using prj_idv.Services.Classes;

namespace prj_idv.Services
{
    public partial interface IMetasService
    {
        [OperationContract]
        [
            WebInvoke(Method = "POST",
            ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json,
            UriTemplate = "vendedor")
        ]
        Vendedor Vendedor(Vendedor vendedor);
    }
}
