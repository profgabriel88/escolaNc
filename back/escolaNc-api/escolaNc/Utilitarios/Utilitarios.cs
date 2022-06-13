using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace escolaNc.Utilitarios
{
	public static class Utilitarios
	{
		//public static string formataData(string data)
		//{
		//	//return data.Replace(/\D / g, "").Replace(/ (\d{ 2})(\d)/, "$1/$2").Replace(/ (\d{ 2})(\d)/, "$1/$2").Replace(/ (\d{ 4})(\d)/, "$1");
		//}

		public static string formataCpf(string cpf)
		{
			string retorno = "";
			for (int i = 0; i < cpf.Length; i++)
			{
				retorno += cpf[i];
				if (i == 2 || i == 5)
					retorno += ".";
				if (i == 8)
					retorno += "-";
			}
			return retorno;
		}

		//public static string removeMascara(string mask)
		//{
		//	//return mask.Replace(/[.-] / g, '');
		//}
	}
}
