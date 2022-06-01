using escolaNc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Interfaces
{
  public interface IUsuarioService
  {
    public List<Usuario> RetornaUsuarios();
    public Usuario InsereUsuario(Usuario usuario);
    public Usuario AtualizaUsuario(Usuario usuario);
    public bool RemoveUsuario(string cpf);
  }
}
