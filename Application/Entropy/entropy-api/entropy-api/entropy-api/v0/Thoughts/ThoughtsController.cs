using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using entropy.entities;
using entropyapi.Controllers.v0.Thoughts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace entropyapi.Controllers
{
   
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ThoughtsController : ControllerBase
    {
        private IThoughtService thoughtService;

       

        public ThoughtsController(IThoughtService thoughtService)
        {
            this.thoughtService = thoughtService;
        }
        
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        /// <summary>
        /// Create a new thought
        /// </summary>
        /// <param name="thought">ThoughtModel</param>        
        [HttpPost]
        public async Task Post([FromBody]Thought thought)
        {
          await  this.thoughtService.InsertThought(thought);
        }

       
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
