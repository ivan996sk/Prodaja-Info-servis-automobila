using SIBack.Interfaces;
using SIBack.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SIBack.Data
{
    public class MockAutomobilData : IAutomobilData
    {

        private DatabaseConn _dbContext;

        public MockAutomobilData(DatabaseConn dbContext)
        {
            _dbContext = dbContext;
        }

        public Automobil AddAutomobil(Automobil auto)
        {
            Automobil a = new Automobil();
            a.brand = auto.brand;
            a.model = auto.model;
            a.grad = auto.grad;
            a.godiste = auto.godiste;
            a.kilometraza = auto.kilometraza;
            a.kubikaza = auto.kubikaza;
            a.registrovanDo = auto.registrovanDo;
            a.boja = auto.boja;
            a.price = auto.price;
            a.id = new Guid();

            _dbContext.Automobili.Add(a);
            _dbContext.SaveChanges();
            
            return a;
        }

        public void DeleteAutomobil(Automobil auto)
        { 
            _dbContext.Automobili.Remove(auto);
            _dbContext.SaveChanges();
        }

        public Automobil EditAutomobila(Automobil auto)
        {
            Automobil a = _dbContext.Automobili.Where(a => a.id == auto.id).FirstOrDefault();

            if (a != null)
            {
                a.brand = auto.brand;
                a.model = auto.model;
                a.grad = auto.grad;
                a.godiste = auto.godiste;
                a.kilometraza = auto.kilometraza;
                a.kubikaza = auto.kubikaza;
                a.registrovanDo = auto.registrovanDo;
                a.boja = auto.boja;
                a.price = auto.price;

                _dbContext.Automobili.Update(a);
                _dbContext.SaveChanges();
            }

            return a;
        }

        public Automobil GetAutomobila(Guid id)
        {
            Automobil auto = _dbContext.Automobili.Where(auto => auto.id == id).FirstOrDefault();

            return auto;
        }

        public List<Automobil> GetAutomobile()
        {
            List<Automobil> auta = _dbContext.Automobili.ToList();

            auta.Reverse();

            return auta;

        }
    }
}
