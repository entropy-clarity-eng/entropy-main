using System;
using System.Threading.Tasks;
using entropy.entities;

namespace entropyapi.Controllers.v0.Thoughts
{
    public interface IThoughtService
    {
        Task InsertThought(ThoughtBindable thoughtToInsert);
    }
}
