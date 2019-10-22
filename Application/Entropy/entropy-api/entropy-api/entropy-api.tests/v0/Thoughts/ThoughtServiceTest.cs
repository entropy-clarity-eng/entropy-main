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
            throw new NotImplementedException();
        }

        [Fact]
        public void InsertThought_ValidThought_ShouldBePersistedWithAnId()
        {
            throw new NotImplementedException();
        }

        [Fact]
        public void InsertThought_ValidThought_ShouldBePersistedWithTheCorrectUTCTime()
        {
            throw new NotImplementedException();
        }

        [Fact]
        public void InsertThought_NullThought_ShouldThrowException()
        {
            throw new NotImplementedException();
        }

        [Fact]
        public void InsertThought_EmptyThoughtText_ShouldThrowException()
        {
            throw new NotImplementedException();
        }

        
    }
}
