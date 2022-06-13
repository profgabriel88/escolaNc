using escolaNc.Data;
using escolaNc.Excecoes;
using escolaNc.Interfaces;
using escolaNc.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace escolaNc.Servicos
{
    public class LoginService : ILoginService
    {
        private readonly EscolaContext _context;
        public LoginService(EscolaContext context)
        {
            _context = context;
        }
        public bool Cadastro(Login login)
        {
            try
            {
                login.hash_senha = GerarHash(login.hash_senha);

                _context.USER_LOGIN.Add(login);
                _context.SaveChanges();
                return true;
            }
            catch
            {
                throw new Excecao("Usuário já cadastrado");
            }
        }

        public Login Login(Login login)
        {
            if (!_context.USER_LOGIN.Any(l => l.cpf == login.cpf))
                throw new Excecao("Usuário não cadastrado.");

            var usuario = _context.USER_LOGIN.Find(login.cpf);
            if (ValidaSenha(usuario, login.hash_senha))
            {
                usuario.hash_senha = "";

                return usuario;
            }

            throw new Excecao("Senha incorreta.");
        }

        public bool ValidaSenha(Login usuario, string senha)
        {
            if (GerarHash(senha) == usuario.hash_senha)
                return true;

            return false;
        }

        public string GerarHash(string senha)
        {
            byte[] hashValue;
            string hashSenha = "";
            using (HashAlgorithm mySHA256 = SHA256.Create())
            {
                hashValue = mySHA256.ComputeHash(Encoding.UTF8.GetBytes("15503UM54L"+senha));
            }

            foreach (byte b in hashValue)
            {
                hashSenha += b.ToString("X2");
            }

            return hashSenha;
        }
    }
}
