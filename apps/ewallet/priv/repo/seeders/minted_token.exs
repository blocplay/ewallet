# This is the seeding script for MintedToken.
alias Ecto.UUID
alias EWallet.{CLI, MintGate, Seeder}
alias EWalletDB.{Account, MintedToken, Repo}

seeds = [
  %{
    symbol: "PLAY",
    name: "TokenPlay",
    subunit_to_unit:        10_000,
    genesis_amount: 10_000_000_000_000, # 1,000,000,000 PLAY
    account_id: Account.get_master_account().id
  },
  %{
    symbol: "PLAYGDC",
    name: "TokenPlayGDC",
    subunit_to_unit:        10_000,
    genesis_amount: 30_000_000, # 3,000 PLAYGDC
    account_id: Account.get_master_account().id
  },
  %{
    symbol: "PLAYESL",
    name: "TokenPlayESL",
    subunit_to_unit:        10_000,
    genesis_amount: 500_000_000, # 50,000 PLAYESL
    account_id: Account.get_master_account().id
  },
  %{
    symbol: "PLAYE3",
    name: "TokenPlayE3",
    subunit_to_unit:        10_000,
    genesis_amount: 1_500_000_000, # 150,000 PLAYE3
    account_id: Account.get_master_account().id
  },
  %{
    symbol: "PLAYGC",
    name: "TokenPlayGC",
    subunit_to_unit:        10_000,
    genesis_amount: 1_500_000_000, # 150,000 PLAYGC
    account_id: Account.get_master_account().id
  },
  %{
    symbol: "PLAYHGA",
    name: "TokenPlayHGA",
    subunit_to_unit:        10_000,
    genesis_amount: 500_000_000, # 50,000 PLAYHGA
    account_id: Account.get_master_account().id
  },
]

Enum.each(seeds, fn(data) ->
  with nil                 <- Repo.get_by(MintedToken, symbol: data.symbol),
       {:ok, _minted_token} <- MintedToken.insert(data)
  do
    nil
  else
    %MintedToken{} ->
      nil
    {:error, changeset} ->
      CLI.error("MintedToken #{data.symbol} could not be inserted:")
      Seeder.print_errors(changeset)
    _ ->
      CLI.error("MintedToken #{data.symbol} could not be inserted:")
      CLI.error("  Unable to parse the provided error.\n")
  end
end)

Enum.each(seeds, fn(data) ->
  minted_token = Repo.get_by(MintedToken, symbol: data.symbol)

  mint_data = %{
    "idempotency_token" => UUID.generate(),
    "token_id" => minted_token.friendly_id,
    "amount" => data.genesis_amount,
    "description" => "Seeded #{data.genesis_amount} #{minted_token.friendly_id}.",
    "metadata" => %{}
  }

  case MintGate.insert(mint_data) do
    {:ok, _mint, _transfer} ->
      nil
    {:error, changeset} ->
      CLI.error("#{minted_token.symbol} could not be minted:")
      Seeder.print_errors(changeset)
    _ ->
      CLI.error("#{minted_token.symbol} could not be minted:")
      CLI.error("  Unable to parse the provided error.\n")
  end
end)
