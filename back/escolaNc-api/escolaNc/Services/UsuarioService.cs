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

      using (StreamReader r = new StreamReader("./Models/usuarios.json"))
      {
        string json = r.ReadToEnd();
        json = json.Replace("\n", "").Replace("\r", "").Replace("\\", "");
        usuarios = JsonConvert.DeserializeObject<List<Usuario>>(json);
      }
      return usuarios;
    }
  }
}
