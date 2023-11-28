using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using System.Drawing;
using System.Text;
using System.Text.Json;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntrancesController : Controller
    {
        public EntrancesController(IConfiguration configuration)
        {
            _configuration = configuration;
            Path = _configuration.GetSection("Path").GetSection("JsonPath").Value;
        }
        public IConfiguration _configuration { get; set; }
        public TicketsAvailability[] TicketsAvailability { get; set; }
        public string Path { get; set; }
        
        [HttpGet]
        public ActionResult<TicketsAvailability[]> GetTicketsAvailability()
        {
            try
            {
                string json = System.IO.File.ReadAllText(Path);
                TicketsAvailability = JsonSerializer.Deserialize<TicketsAvailability[]>(json);
                return TicketsAvailability;
            }
            catch (IOException ex)
            {
                throw (ex);
            }
        }
        [HttpPut]
        [Route("{index}")]
        public ActionResult<TicketsAvailability[]> TicketPurchase([FromBody] int numOfTickets, [FromRoute] int index)
        {
            try
            {
                //call GetTicketsAvailability function in order to get data and update it.
                GetTicketsAvailability();
                TicketsAvailability[index].availablePlaces -= numOfTickets;
                var json = JsonSerializer.Serialize(TicketsAvailability);
                System.IO.File.WriteAllText(Path, json);
                return TicketsAvailability;
            }
            catch (IOException ex)
            {
                throw (ex);
            }
        }
    }
}