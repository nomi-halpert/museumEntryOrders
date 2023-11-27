namespace server.Models
{
    public class TicketsAvailability
    {
        public string startTime { get; set; }
        public int availablePlaces { get; set; }
        public bool isClosed { get; set; }
    }
}
