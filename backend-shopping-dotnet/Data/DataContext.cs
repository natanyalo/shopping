using Microsoft.AspNetCore.Routing.Constraints;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

public class MyContext(DbContextOptions options) : DbContext(options)
{
  
    public DbSet<Product> Products { get; set; }
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<Product>().HasData(
         // Vegetable Category
            new Product { Id = 1, Name = "Carrot", Category = "Vegetable", Price = 1.99 },
            new Product { Id = 2, Name = "Broccoli", Category = "Vegetable", Price = 1.29 },
            new Product { Id = 3, Name = "Lettuce", Category = "Vegetable", Price = 0.79 },
            new Product { Id = 4, Name = "Tomato", Category = "Vegetable", Price = 0.89 },
            new Product { Id = 5, Name = "Cucumber", Category = "Vegetable", Price = 0.69 },
            new Product { Id = 6, Name = "Pepper", Category = "Vegetable", Price = 1.19 },

            // Meat Category
            new Product { Id = 7, Name = "Chicken Breast", Category = "Meat", Price = 5.99 },
            new Product { Id = 8, Name = "Beef Steak", Category = "Meat", Price = 12.99 },
            new Product { Id = 9, Name = "Pork Chop", Category = "Meat", Price = 8.49 },
            new Product { Id = 10, Name = "Lamb Leg", Category = "Meat", Price = 15.99 },
            new Product { Id = 11, Name = "Turkey Breast", Category = "Meat", Price = 6.99 },
            new Product { Id = 12, Name = "Ground Beef", Category = "Meat", Price = 4.99 },

            // Electronic Devices Category
            new Product { Id = 13, Name = "Smartphone", Category = "Electronic Devices", Price = 299.99 },
            new Product { Id = 14, Name = "Laptop", Category = "Electronic Devices", Price = 999.99 },
            new Product { Id = 15, Name = "Tablet", Category = "Electronic Devices", Price = 199.99 },
            new Product { Id = 16, Name = "Smartwatch", Category = "Electronic Devices", Price = 149.99 },
            new Product { Id = 17, Name = "Headphones", Category = "Electronic Devices", Price = 79.99 },
            new Product { Id = 18, Name = "Bluetooth Speaker", Category = "Electronic Devices", Price = 49.99 }
    );
}

}


