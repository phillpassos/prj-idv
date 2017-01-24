using System;
using System.Collections.Generic;

namespace prj_idv.Services.Classes
{
    public class MetaDia
    {
        public int Id { get; set; }
        public DateTime Dia { get; set; }
        public double Valor { get; set; }
        public List<Vendedor> Vendedores { get; set; }
    }
}
