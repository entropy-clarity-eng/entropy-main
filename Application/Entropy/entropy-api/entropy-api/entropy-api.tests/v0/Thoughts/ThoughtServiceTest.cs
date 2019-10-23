using System;
using entropy.entities;
using entropy_api.tests.helpers;
using entropyapi.Controllers.v0.Thoughts;
using Xunit;

namespace entropy_api.tests
{
    public class ThoughtServiceTest
    {
        

        public ThoughtServiceTest()
        {
           
        }

        [Fact]
        public void InsertThought_ValidThought_ShouldBePersisted()
        {
            var options = InMemoryOptionsHelper.BuildNewOptions();

            using (var context = new EntropyContext(options))
            {
                

            }
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
