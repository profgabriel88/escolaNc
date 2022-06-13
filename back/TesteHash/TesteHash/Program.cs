using System;
using System.Security.Cryptography;
using System.Text;

namespace TesteHash
{
    internal class Program
    {
        static void Main(string[] args)
        {
            byte[] hashValue1;
            byte[] hashValue2;
            string hashSenha1 = "";
            string hashSenha2 = "";
            using (HashAlgorithm mySHA256 = SHA256.Create())
            {
                hashValue1 = mySHA256.ComputeHash(Encoding.UTF8.GetBytes("abacaxi"));
                hashValue2 = mySHA256.ComputeHash(Encoding.UTF8.GetBytes("15503UM54L" + "abacaxi"));
            }

            foreach (byte b in hashValue1)
            {
                hashSenha1 += b.ToString("X2");
            }
            foreach (byte b in hashValue2)
            {
                hashSenha2 += b.ToString("X2");
            }

            Console.WriteLine(hashSenha1);
            Console.WriteLine(hashSenha2);
        }
    }
}
