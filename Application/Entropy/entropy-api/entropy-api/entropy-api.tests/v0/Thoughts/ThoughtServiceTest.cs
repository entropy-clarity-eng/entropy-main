using System;
using entropy.entities;
using entropy_api.tests.helpers;
using entropyapi.Controllers.v0.Thoughts;
using Xunit;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace entropy_api.tests
{
    public class ThoughtServiceTest
    {
        

        public ThoughtServiceTest()
        {
           
        }

        [Fact]
        public async Task InsertThought_ValidThought_ShouldBePersisted()
        {
            //Arrange
            var options = InMemoryOptionsHelper.BuildNewOptions();

            //Act
            await this.InsertThought(new ThoughtBindable() { ThoughtText = "New Thought" },options);

            //Assert (using a separate context verifies data was saved correctly)
            using (var context = new EntropyContext(options))
            {
                Assert.NotNull(context.Thoughts.FirstOrDefault());
            }
        }

        [Fact]
        public async Task InsertThought_ValidThought_ShouldContainThoughtText()
        {
            //Arrange
            var options = InMemoryOptionsHelper.BuildNewOptions();

            //Act
            await this.InsertThought(new ThoughtBindable() { ThoughtText = "New Thought" }, options);

            //Assert (using a separate context verifies data was saved correctly)
            using (var context = new EntropyContext(options))
            {
                Assert.Equal("New Thought", context.Thoughts.First().ThoughtText);
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


        /// Helper Methods
        private async Task InsertThought(ThoughtBindable thoughtMock, DbContextOptions<EntropyContext> options)
        {
            using (var context = new EntropyContext(options))
            {
                var thoughtService = new ThoughtService(context);

                //Act
                await thoughtService.InsertThought(thoughtMock);

            }
        }

        
    }
}
