using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend_shopping_dotnet.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Category", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "Vegetable", "Carrot", 1.99 },
                    { 2, "Vegetable", "Broccoli", 1.29 },
                    { 3, "Vegetable", "Lettuce", 0.79000000000000004 },
                    { 4, "Vegetable", "Tomato", 0.89000000000000001 },
                    { 5, "Vegetable", "Cucumber", 0.68999999999999995 },
                    { 6, "Vegetable", "Pepper", 1.1899999999999999 },
                    { 7, "Meat", "Chicken Breast", 5.9900000000000002 },
                    { 8, "Meat", "Beef Steak", 12.99 },
                    { 9, "Meat", "Pork Chop", 8.4900000000000002 },
                    { 10, "Meat", "Lamb Leg", 15.99 },
                    { 11, "Meat", "Turkey Breast", 6.9900000000000002 },
                    { 12, "Meat", "Ground Beef", 4.9900000000000002 },
                    { 13, "Electronic Devices", "Smartphone", 299.99000000000001 },
                    { 14, "Electronic Devices", "Laptop", 999.99000000000001 },
                    { 15, "Electronic Devices", "Tablet", 199.99000000000001 },
                    { 16, "Electronic Devices", "Smartwatch", 149.99000000000001 },
                    { 17, "Electronic Devices", "Headphones", 79.989999999999995 },
                    { 18, "Electronic Devices", "Bluetooth Speaker", 49.990000000000002 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
