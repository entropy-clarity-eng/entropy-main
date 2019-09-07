using System;
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

        

        public void InsertThought(Thought thought)
        {
            this.context.Thoughts.Add(thought);
        }

        
    }
}
