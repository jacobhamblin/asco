class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :recipient_id, null: false, index: true
      t.integer :issuer_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
