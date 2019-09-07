using System;
using entropy.entities;

namespace entropyapi.Controllers.v0.Thoughts
{
    public interface IThoughtRepository
    {
        void InsertThought(Thought thought);
    }
}
