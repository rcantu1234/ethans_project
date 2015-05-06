class CreateLetters < ActiveRecord::Migration
  def change
    create_table :letters do |t|
      t.string :first_image
      t.string :second_image

      t.timestamps null: false
    end
  end
end
