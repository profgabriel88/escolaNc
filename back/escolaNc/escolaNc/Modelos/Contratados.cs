﻿using System;
using System.ComponentModel.DataAnnotations;

namespace escolaNc.Modelos
{
    public class Contratados
    {
        [Key]
        public int id_servicos_contratados { get; set; }
        public int id_servico { get; set; }
        public string cpf_usuario { get; set; }
        public DateTime dt_contratacao { get; set; } = DateTime.Now;
    }

    public class Detalhes
    {
        public int id_servicos_contratados { get; set; }
        public string cpf_usuario { get; set; }
        public string nome { get; set; }
        public decimal preco { get; set; }
        public string descricao { get; set; }
        public DateTime dt_contratacao { get; set; }
    }
}
