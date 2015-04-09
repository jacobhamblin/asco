class Api::ImagesController < ApplicationController
  before_action :set_image, :only => [:show, :update, :destroy]

  def index
    case params[:source]
    when "feed"
      @images = current_user.followed_images
    when "grid"
      @images = Image.all.where(curated: true)
    when "myGrid"
      @images = current_user.images
    else
      @images = Image.all
    end
    render :json => @images
  end

  def show
    render json: @image
  end

  def create
    @image = Image.new(todo_params)
    @image.owner_id = current_user.id
    if @image.save
      render :json => @image
    else
      render :json => @image.errors.full_messages, :status => :unprocessable_entity
    end
  end

  def update
    if @image.update_attributes(todo_params)
      render :json => @image
    else
      fail
      render :json => @image.errors.full_messages, :status => :unprocessable_entity
    end
  end

  def destroy
    @image.destroy if @image
    render :json => {}
  end

  private
  def set_image
    @image = Image.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:url)
  end
end