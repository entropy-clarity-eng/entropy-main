using System;

namespace entropy.entities
{
    public class Thought:ThoughtBindable
    {
        public Guid Id { get; set; }
       
        public Guid UserId { get; set; }

        public Thought() { }

        public Thought(ThoughtBindable newThought)
        {
            this.ThoughtText = newThought.ThoughtText;
            this.UTCTimeRecorded = newThought.UTCTimeRecorded;
        }
    }
}
