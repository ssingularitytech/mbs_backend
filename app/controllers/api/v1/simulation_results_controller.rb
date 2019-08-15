class Api::V1::SimulationResultsController < Api::V1::ApiController
  before_action :set_simulation_result, only: [:update, :destroy]
  skip_before_action :authenticate_user!, only: [:create, :index, :show, :simulation_index, :simulation_user_show], raise: false
  # GET /simulation_results
  def index
    @simulation_results = SimulationResult.includes(:user).map{|i| {id: i.id, user_id: i.user_id, email: i.user.email, simulation_id: i.simulation_id, user: i.user.as_json(only: [:email, :name, :nickname]), user_data: {questions: i.user_data["questions"], simParams: i.user_data["simParams"]}}}
    # @simulation_results =  SimulationResult.all
    render json: @simulation_results
  end

  def simulation_index
    @simulation_results =  SimulationResult.where(simulation_id: params[:id])
    render json: @simulation_results
  end

  # GET /simulation_results/1
  def show
    @simulation_result = SimulationResult.find_by(user_id: params[:id])
    render json: @simulation_result
  end

  def simulation_user_show
    @simulation_result = SimulationResult.find_by(user_id: params[:id], simulation_id: params[:simulation_id]).as_json(:include => :user)
    render json: @simulation_result
  end

  # POST /simulation_results
  def create
    @simulation_result = SimulationResult.find_or_initialize_by(:user_id => params[:user_id], :simulation_id => params[:simulation_id])
    @simulation_result.user_data = params["user_data"]
    if @simulation_result.save
      render json: @simulation_result
    else
      render json: @simulation_result.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /simulation_results/1
  def update
    if @simulation_result.update(simulation_result_params)
      render json: @simulation_result
    else
      render json: @simulation_result.errors, status: :unprocessable_entity
    end
  end

  
  # DELETE /simulation_results/1
  def destroy
    @simulation_result.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_simulation_result
      @simulation_result = SimulationResult.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def simulation_result_params
      params.fetch(:simulation_result, {}).permit(:user_id, :simulation_id, {user_data: [questions: [], simParams: []]})
    end
end
