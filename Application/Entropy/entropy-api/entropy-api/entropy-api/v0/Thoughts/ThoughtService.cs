using System;
using System.Threading.Tasks;
using entropy.entities;

namespace entropyapi.Controllers.v0.Thoughts
{
    public class ThoughtService: IThoughtService
    {

        private EntropyContext context;

        public ThoughtService(EntropyContext context)
        {
            this.context = context;
        }

        

        public async Task InsertThought(ThoughtBindable thoughtToInsert)
        {
            if (thoughtToInsert == null)
                throw new ArgumentException("Thought to insert can not be null");
            else if (String.IsNullOrEmpty(thoughtToInsert.ThoughtText))
                throw new ArgumentException("Thought to insert can not have empty thoughtText");


            var thought = new Thought(thoughtToInsert);
   
            thought.UTCTimeRecorded = DateTime.UtcNow;
            this.context.Thoughts.Add(thought);
            await this.context.SaveChangesAsync();
        }

        
    }
}
