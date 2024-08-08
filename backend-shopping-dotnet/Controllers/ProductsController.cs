
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Shopping ;

[ApiController]
[Route("api/[controller]")]
public class ProductsController(MyContext context) : ControllerBase
{


    [HttpGet("category/{category}")]
    public async Task<IActionResult> GetByCategory(string category)
    {
        var products = await context.Products.Where(p => p.Category == category).ToListAsync();

        if (products == null || products.Count == 0)
        {
            return NotFound();
        }

        return Ok(products);
    }
}

