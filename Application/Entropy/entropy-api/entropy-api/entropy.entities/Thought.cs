using System;

namespace entropy.entities
{
    public class Thought:ThoughtBindable
    {
        public Guid Id { get; set; }
        public DateTime UTCTimeRecorded { get; set; }
        public Guid UserId { get; set; }
    }
}
