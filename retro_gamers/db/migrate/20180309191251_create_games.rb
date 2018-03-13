class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
       # t.string  :title
       # t.string  :genre
       # t.string  :description
       # t.integer :price
       # t.string  :img_url
        t.string  :name
        t.string  :image_url
       t.string  :deck
       
       
        
      
      t.timestamps
    end
  end
end
