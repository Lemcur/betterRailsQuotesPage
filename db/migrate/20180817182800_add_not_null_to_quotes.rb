class AddNotNullToQuotes < ActiveRecord::Migration[5.2]
  def change
  	change_column :quotes, :author, :text, null: false
  	change_column :quotes, :content, :text, null: false
  end
end
