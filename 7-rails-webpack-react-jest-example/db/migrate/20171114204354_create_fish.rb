class CreateFish < ActiveRecord::Migration[5.1]
  def change
    create_table :fish do |t|
      t.string :name
      t.integer :price
      t.string :status
      t.text :desc
      t.string :image

      t.timestamps
    end
  end
end
