﻿using System;
using System.Threading.Tasks;
using entropy.entities;

namespace entropyapi.Controllers.v0.Thoughts
{
    public class ThoughtService: IThoughtService
    {

        private EntropyContext context;

        public ThoughtService(EntropyContext context)
        {
            this.context = context;
        }

        

        public async Task InsertThought(Thought thought)
        {
            thought.UTCTimeRecorded = DateTime.UtcNow;
            this.context.Thoughts.Add(thought);
            await this.context.SaveChangesAsync();
        }

        
    }
}