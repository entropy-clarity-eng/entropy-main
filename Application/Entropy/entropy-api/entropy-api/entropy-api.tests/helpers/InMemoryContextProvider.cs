using System;
using entropy.entities;
using Microsoft.EntityFrameworkCore;

namespace entropy_api.tests.helpers
{
    public class InMemoryOptionsHelper
    {
        public InMemoryOptionsHelper()
        {
        }

        public static DbContextOptions<EntropyContext> BuildNewOptions()
        {
            return new DbContextOptionsBuilder<EntropyContext>()
                .UseInMemoryDatabase(databaseName: "Entropy").Options;
        }
    }
}
