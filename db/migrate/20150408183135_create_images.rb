class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :owner_id, null: false, index: true
      t.boolean :curated, default: false
      t.string :url, null: false
      t.text :description
      t.string :tag

      t.timestamps null: false
    end
  end
end
