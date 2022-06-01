using escolaNc.Interfaces;
using escolaNc.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;


namespace escolaNc.Services
{
  public class UsuarioService : IUsuarioService
  {
    public List<Usuario> RetornaUsuarios()
    {
      List<Usuario> usuarios = new List<Usuario>();

      using (StreamReader r = new StreamReader("./Models/usuarios.csv"))
      {
        while( r.Peek() >= 0)
        {
          string u = r.ReadLine();
          string[] usuario = u.Split(",");
          usuarios.Add(new Usuario {nome = usuario[0], idade = usuario[1], cpf = usuario[2], rg = usuario[3], data_nasc = usuario[4], endereco = usuario[5], cidade = usuario[6]});
        }
      }
      return usuarios;
    }

    public Usuario InsereUsuario(Usuario usuario)
    {
      
      return null;
    }
    public Usuario AtualizaUsuario()
    {
      return null;
    }
    public bool RemoveUsuario()
    {
      return null;
    }
  }
}
