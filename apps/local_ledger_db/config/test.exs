use Mix.Config

config :local_ledger_db, LocalLedgerDB.Repo,
  adapter: Ecto.Adapters.Postgres,
  pool: Ecto.Adapters.SQL.Sandbox,
  database: "local_ledger_test_db",
  username: "postgres",
  password: "sdff37382",
  hostname: "localhost",
  port: "5432"

# Uncomment this line to hide database requests when running tests
config :logger, level: :info

key = "j6fy7rZP9ASvf1bmywWGRjrmh8gKANrg40yWZ-rSKpI"

config :cloak, Salty.SecretBox.Cloak,
       tag: "SBX",
       default: true,
       keys: [%{tag: <<1>>, key: key, default: true}]
