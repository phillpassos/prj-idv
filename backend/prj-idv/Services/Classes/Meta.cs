using System;
using System.Collections.Generic;

namespace prj_idv.Services.Classes
{
    public class Meta
    {
        public int Id { get; set; }
        public DateTime Referencia { get; set; }
        public DateTime Inicio { get; set; }
        public DateTime Fim { get; set; }
        public double Valor { get; set; }
        public List<MetaDia> MetaDias { get; set; }
    }
}
