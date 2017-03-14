class MoodsController < ApplicationController

  def index
    @moods = Mood.all
  end

  def show
    @mood = Mood.find(params[:id])

  respond_to do |format|
    format.json { render json: @uri }
    format.html { render :show}
  end
end
end
