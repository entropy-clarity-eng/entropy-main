using System;
using entropy.entities;

namespace entropyapi.Controllers.v0.Thoughts
{
    public class ThoughtRepository: IThoughtRepository, IDisposable
    {

        private EntropyContext context;

        public ThoughtRepository(EntropyContext context)
        {
            this.context = context;
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public void InsertThought(Thought thought)
        {
            this.context.Thoughts.Add(thought);
        }

        
    }
}
