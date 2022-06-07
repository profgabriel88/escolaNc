using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Models
{
	public class RelFaturamento
	{
		public string ID_SERVICO { get; set; }
		public string DESCRICAO { get; set; }
		public int ASSINANTES { get; set; }
		public decimal VALOR { get; set; }
		public decimal FATURAMENTO { get; set; }
	}
}
