class CustomersController < ApplicationController
    wrap_parameters format:[]

    def index
        customers = Customer.all 
        if customers
            render json: customers, except: [:created_at, :updated_at], statuse: :ok 
        else
            render json: {error: "Customers not found"}, status: :not_found
        end
    end

    def show
        customer = Customer.find_by(id: params[:id])
        if customer
            render json: customer, status: :accepted
        else
            render json: {error: "Customer not found"}, status: :not_found
        end
    end

    def create
        customer = Customer.create(customer_params)
        render json: customer, status: :accepted
    end

    def destroy
        customer = Customer.find_by(id: params[:id])
        if customer
            customer.destroy
            head :no_content
        else
            render json: {error: "Delete failed"}
        end
    end


    private
    def customer_params
        params.permit(:name, :account,
        :iban, :swift)
    end
end
