using Microsoft.EntityFrameworkCore;
using SIBack.Models;
using System.Reflection;

namespace SIBack.Data
{
    public class DatabaseConn : DbContext
    {
        public DatabaseConn(DbContextOptions<DatabaseConn> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

        public DatabaseConn()
        {
        }

        public DbSet<Automobil> Automobili { get; set; }


    }
}
