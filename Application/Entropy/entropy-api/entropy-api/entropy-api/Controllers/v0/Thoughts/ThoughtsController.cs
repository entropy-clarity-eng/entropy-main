using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using entropy.entities;
using entropyapi.Controllers.v0.Thoughts;
using Microsoft.AspNetCore.Mvc;


namespace entropyapi.Controllers
{
    [Route("api/v1/[controller]")]
    public class ThoughtsController : Controller
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
        public void Post([FromBody]Thought thought)
        {
            this.thoughtService.InsertThought(thought);
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
