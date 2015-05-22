class LettersController < ApplicationController
  before_action :set_letter, only: [:show, :edit, :update, :destroy]

  # GET /letters
  # GET /letters.json
  def index
    @letters = Letter.all
  end

  def lettershn
    #@letters = Letter.all
  end

  def lettersou
    @letters = Letter.all
  end

  def lettersvz

  end

  def lettera
    @letters = Letter.all
  end

  def letterb
  end

  def letterc
  end

  def letterd
  end

  def lettere
  end

  def letterf
    # @letters = Letter.all
  end

  def letterg
  end

  def letterh
  end

  def letteri
    @letters = Letter.all
  end

  def letterj
  end

  def letterk
  end

  def letterl
  end

  def letterm
  end

  def lettern
  end

  def lettero
  end

  def letterp
  end

  def letterq
  end

  def letterr
  end

  def letters
  end

  def lettert
  end

  def letteru
  end

  def letterv
  end

  def letterw
  end

  def letterx
  end

  def letterz
  end


  # GET /letters/1
  # GET /letters/1.json
  def show
    @letters = Letter.all
  end

  # GET /letters/new
  def new
    @letter = Letter.new
  end

  # GET /letters/1/edit
  def edit
  end

  # POST /letters
  # POST /letters.json
  def create
    @letter = Letter.new(letter_params)

    respond_to do |format|
      if @letter.save
        format.html { redirect_to @letter, notice: 'Letter was successfully created.' }
        format.json { render :show, status: :created, location: @letter }
      else
        format.html { render :new }
        format.json { render json: @letter.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /letters/1
  # PATCH/PUT /letters/1.json
  def update
    respond_to do |format|
      if @letter.update(letter_params)
        format.html { redirect_to @letter, notice: 'Letter was successfully updated.' }
        format.json { render :show, status: :ok, location: @letter }
      else
        format.html { render :edit }
        format.json { render json: @letter.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /letters/1
  # DELETE /letters/1.json
  def destroy
    @letter.destroy
    respond_to do |format|
      format.html { redirect_to letters_url, notice: 'Letter was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_letter
      @letter = Letter.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def letter_params
      params.require(:letter).permit(:first_image, :second_image)
    end
end
