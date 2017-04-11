defmodule :"Elixir.PhoenixChat.Repo.Migrations.Add-pw-req" do
  use Ecto.Migration

  def up do
    drop table(:users)
    create table(:users) do
      add :username, :string, null: false
      add :email, :string, null: false
      add :encrypted_password, :string

      timestamps()
    end

      create unique_index(:users, [:email])
      create unique_index(:users, [:username])

  end


end
