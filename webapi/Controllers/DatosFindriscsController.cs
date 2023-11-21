using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DatosFindriscsController : ControllerBase
    {
        private readonly SistemamedicoContext _context;

        public DatosFindriscsController(SistemamedicoContext context)
        {
            _context = context;
        }

        // GET: api/DatosFindriscs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DatosFindrisc>>> GetDatosFindriscs()
        {
          if (_context.DatosFindriscs == null)
          {
              return NotFound();
          }
            return await _context.DatosFindriscs.ToListAsync();
        }

        // GET: api/DatosFindriscs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DatosFindrisc>> GetDatosFindrisc(int id)
        {
          if (_context.DatosFindriscs == null)
          {
              return NotFound();
          }
            var datosFindrisc = await _context.DatosFindriscs.FindAsync(id);

            if (datosFindrisc == null)
            {
                return NotFound();
            }

            return datosFindrisc;
        }

        // PUT: api/DatosFindriscs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDatosFindrisc(int id, DatosFindrisc datosFindrisc)
        {
            if (id != datosFindrisc.Id)
            {
                return BadRequest();
            }

            _context.Entry(datosFindrisc).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DatosFindriscExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DatosFindriscs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DatosFindrisc>> PostDatosFindrisc(DatosFindrisc datosFindrisc)
        {
          if (_context.DatosFindriscs == null)
          {
              return Problem("Entity set 'SistemamedicoContext.DatosFindriscs'  is null.");
          }
            _context.DatosFindriscs.Add(datosFindrisc);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDatosFindrisc", new { id = datosFindrisc.Id }, datosFindrisc);
        }

        // DELETE: api/DatosFindriscs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDatosFindrisc(int id)
        {
            if (_context.DatosFindriscs == null)
            {
                return NotFound();
            }
            var datosFindrisc = await _context.DatosFindriscs.FindAsync(id);
            if (datosFindrisc == null)
            {
                return NotFound();
            }

            _context.DatosFindriscs.Remove(datosFindrisc);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DatosFindriscExists(int id)
        {
            return (_context.DatosFindriscs?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
