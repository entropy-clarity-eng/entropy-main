0): Make sure that the following environment variable is added on your system:
export ENTROPY_SQL_CONNECTION="Server=localhost;Database=EntropyDatabase;User Id=sa;Password=<password>"
1): To add a migration execute: pushd /Users/joelee/Documents/entropy-main/Application/Entropy/entropy-api/entropy-api/entropy.datamigrations.app
2): Type Command: dotnet ef migrations add <MigrationName>

Source: https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/#create-a-migration