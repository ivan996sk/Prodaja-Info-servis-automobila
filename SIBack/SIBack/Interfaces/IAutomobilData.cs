using SIBack.Models;
using System;
using System.Collections.Generic;

namespace SIBack.Interfaces
{
    public interface IAutomobilData
    {
        List<Automobil> GetAutomobile();


        Automobil AddAutomobil(Automobil automobil);
        Automobil GetAutomobila(Guid id);
        Automobil EditAutomobila(Automobil automobil);
        void DeleteAutomobil(Automobil automobil);
    }
}
