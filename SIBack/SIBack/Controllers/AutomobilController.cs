using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SIBack.Interfaces;
using SIBack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SIBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutomobilController : ControllerBase
    {
        //dependencie injections
        private IAutomobilData _automobilData;

        public AutomobilController(IAutomobilData automobilData)
        {
            _automobilData = automobilData;
        }

        [HttpGet]
        [Route("/api/sviAutomobili")]
        public IActionResult GetAutos()
        {
            return Ok(_automobilData.GetAutomobile());
        }

        [HttpGet]
        [Route("/api/automobil/{id}")]
        public IActionResult GetAutomobil(Guid id)
        {
            return Ok(_automobilData.GetAutomobila(id));
        }

        [HttpDelete]
        [Route("/api/brisanje/{id}")]
        public IActionResult DeleteAutomobil(Guid id)
        {
            var auto = _automobilData.GetAutomobila(id);

            if (auto != null)
            { 
                _automobilData.DeleteAutomobil(auto);
                return Ok(true);//200
            }

            return NotFound(false);//404
        }



        [HttpPut]
        [Route("/api/update")]
        public IActionResult EditAutomobil(Automobil autic)
        {
            var auto = _automobilData.GetAutomobila(autic.id);

            if (auto != null)
            {
                _automobilData.EditAutomobila(autic);
                return Ok(true);//200
            }

            return NotFound(false);//404
        }

        [HttpPost]
        [Route("/api/add")]
        public IActionResult DodajAuto(Automobil a)
        {
            var automobil = _automobilData.AddAutomobil(a);

             return Ok(automobil);//200
            
        }

    }
}
