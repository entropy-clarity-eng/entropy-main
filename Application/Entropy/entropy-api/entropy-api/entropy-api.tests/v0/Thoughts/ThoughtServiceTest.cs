using System;
using entropyapi.Controllers.v0.Thoughts;
using Xunit;

namespace entropy_api.tests
{
    public class ThoughtServiceTest
    {
        private readonly ThoughtService _thoughtService;

        public ThoughtServiceTest()
        {
            this._thoughtService = new ThoughtService(null);
        }

        [Fact]
        public void InsertThought_ValidThought_ShouldBePersisted()
        {
        }
    }
}
