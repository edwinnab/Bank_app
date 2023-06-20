class FixCustomersColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :customers, :account_number, :account
    rename_column :customers, :swift_bic, :swift
  end
end
