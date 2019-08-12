class ApplicationController < ActionController::Base
    protect_from_forgery prepend: true
    # before_action :authenticate_user!
    protected

    def after_sign_in_path_for(resource)
      # return the path based on resource
      stored_location_for(resource) || "/admin"
    end
end
