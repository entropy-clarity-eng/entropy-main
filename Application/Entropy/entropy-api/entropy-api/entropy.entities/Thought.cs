using System;

namespace entropy.entities
{
    public class Thought
    {
        public Guid Id { get; set; }
        public DateTime UTCTimeRecorded { get; set; }
        public String ThoughtText { get; set; }
        public Guid UserId { get; set; }
    }
}
