class ConversationsController < ApplicationController
	
	def index
		@conversations = Conversation.all
		render json: @conversations
	end

	def show
		@conversation = Conversation.find(params[:id])
		render json: @conversation.messages
	end

	def new
		@conversation = Conversation.new
	end

	def create
		@conversation = Conversation.create(conversation_params)
		render json: @conversation
	end

	def edit
		@conversation = Conversation.find(params[:id])
		render json: @conversation
	end

	def update
		@conversation = Conversation.find(params[:id])
		@conversation.update(conversation_params)
		render json: @conversation
	end

	def destroy
		@conversation = Conversation.find(params[:id])
		@conversation.destroy
		render json: @conversation
	end

	private

	def project_params
		params.require(:conversation).permit(:title, :message_id)
	end

end