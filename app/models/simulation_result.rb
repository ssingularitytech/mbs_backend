class SimulationResult < ApplicationRecord
    belongs_to :simulation
    belongs_to :user
end
