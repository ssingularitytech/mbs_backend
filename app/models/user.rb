# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :simulation_results, dependent: :destroy
  has_many :simulations, through: :simulation_results

#   after_create :assign_user_data_details


  def assign_user_data_details
		udd = UserDataDetail.new
		udd.user = self
		self.save
		udd.save!
	end
end
