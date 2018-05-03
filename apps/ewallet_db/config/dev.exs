use Mix.Config

config :ewallet_db, EWalletDB.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "ewallet_db",
  username: "postgres",
  password: "sdff37382",
  hostname: "localhost",
  port: "5432"

config :ewallet_db,
  base_url: "http://ewallet.tokenplay.com"

key = "j6fy7rZP9ASvf1bmywWGRjrmh8gKANrg40yWZ-rSKpI"

config :cloak, Salty.SecretBox.Cloak,
       tag: "SBX",
       default: true,
       keys: [%{tag: <<1>>, key: key, default: true}]
