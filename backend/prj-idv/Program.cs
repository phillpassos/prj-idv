using System;
using System.ServiceModel.Description;
using System.ServiceModel.Web;
using prj_idv.Services;

namespace prj_idv
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var baseAddress = new Uri("http://localhost:3333/prj-idv-rest-api/");

            using (var host = new WebServiceHost(typeof(MetasService), baseAddress))
            {
                var stp = host.Description.Behaviors.Find<ServiceDebugBehavior>();
                stp.HttpHelpPageEnabled = false;

                host.Open();

                Console.WriteLine("Conexao aberta em {0}", baseAddress);
                Console.ReadLine();

                host.Close();
            }
        }
    }
}
