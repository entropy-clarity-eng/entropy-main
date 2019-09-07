using System;
using entropy.entities;

namespace entropyapi.Controllers.v0.Thoughts
{
    public interface IThoughtService
    {
        void InsertThought(Thought thought);
    }
}
