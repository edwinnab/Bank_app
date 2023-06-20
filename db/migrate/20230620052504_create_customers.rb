class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.integer :account_number
      t.string :iban
      t.string :swift_bic

      t.timestamps
    end
  end
end
