class ApplicationController < ActionController::Base # :nodoc:

  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!, except: %i[home about contact]

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name surname])
    devise_parameter_sanitizer.permit(:account_update, keys: %i[name surname])
  end
  protect_from_forgery with: :exception

end
