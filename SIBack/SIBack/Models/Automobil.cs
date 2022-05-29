using System;
using System.ComponentModel.DataAnnotations;

namespace SIBack.Models
{
    public class Automobil
    {
        [Key]
        public Guid id { get; set; }
        
        public string brand { get; set; }
        public string model { get; set; }
        public int godiste { get; set; }
        public string grad { get; set; }
        public int kubikaza { get; set; }
        public int kilometraza { get; set; }
        public string registrovanDo { get; set; }
        public string boja { get; set; }
        public double price { get; set; }
        
    }
}
