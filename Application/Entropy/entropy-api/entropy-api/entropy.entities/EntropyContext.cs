using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace entropy.entities
{
    public class EntropyContext:DbContext
    {
        public EntropyContext(DbContextOptions<EntropyContext> options)
            : base(options)
        { }

        public DbSet<Thought> Thoughts { get; set; }

        
    }
}
