using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public  class Product {
    [Key]
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Category { get; set; }
    public double Price { get; set; }
}
