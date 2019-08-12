class CreateSimulationResults < ActiveRecord::Migration[5.2]
  def change
    create_table :simulation_results do |t|
      t.integer :simulation_id
      t.integer :user_id
      t.jsonb :user_data

      t.timestamps
    end
  end
end
