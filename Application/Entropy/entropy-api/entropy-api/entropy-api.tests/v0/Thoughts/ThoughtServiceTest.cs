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
        public async Task InsertThought_ValidThought_ShouldBePersistedWithAnId()
        {
            //Arrange
            var options = InMemoryOptionsHelper.BuildNewOptions();

            //Act
            await this.InsertThought(new ThoughtBindable() { ThoughtText = "New Thought" }, options);

            //Assert (using a separate context verifies data was saved correctly)
            using (var context = new EntropyContext(options))
            {
                Assert.NotEqual(context.Thoughts.First().Id,Guid.Empty);
            }
        }

        [Fact]
        public async Task InsertThought_ValidThought_ShouldBePersistedWithTheCorrectUTCTime()
        {
            //Arrange
            var options = InMemoryOptionsHelper.BuildNewOptions();

            //Act
            await this.InsertThought(new ThoughtBindable() { ThoughtText = "New Thought" }, options);

            //Assert (using a separate context verifies data was saved correctly)
            using (var context = new EntropyContext(options))
            {
                Assert.Equal(context.Thoughts.First().UTCTimeRecorded, DateTime.UtcNow, TimeSpan.FromSeconds(1));
            }
        }

        [Fact]
        public async Task InsertThought_NullThought_ShouldThrowException()
        {
            //Arrange
            var options = InMemoryOptionsHelper.BuildNewOptions();

            
            //Assert
            using (var context = new EntropyContext(options))
            {
               await Assert.ThrowsAsync<ArgumentException>(async () => await InsertThought(null, options));
            }
        }

        [Fact]
        public async Task InsertThought_EmptyThoughtText_ShouldThrowException()
        {
            //Arrange
            var options = InMemoryOptionsHelper.BuildNewOptions();


            //Assert
            using (var context = new EntropyContext(options))
            {
                await Assert.ThrowsAsync<ArgumentException>(async () => await InsertThought(new ThoughtBindable() {ThoughtText = "" }, options));
            }
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
