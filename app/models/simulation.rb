class Simulation < ApplicationRecord
    has_many :simulation_results
    has_many :users, through: :simulation_results
end
