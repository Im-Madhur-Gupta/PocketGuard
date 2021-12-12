from .models import expenses_Model

class Details:
    def add_food_to_order(self, account,Monthly_limit,Fruits_vegetables, Fuel,Clothes, Transporation,Entertainment, Dining,Liesure,Grocery,Electronics,Furniture): 


        add_details = expenses_Model(
            account_id_id= account,
            Monthly_limit= Monthly_limit,
            Fruits_vegetables = Fruits_vegetables, 
            Fuel = Fuel,
            Clothes = Clothes, 
            Transporation = Transporation,
            Entertainment = Entertainment, 
            Dining = Dining,
            Liesure= Liesure,
            Grocery = Grocery,
            Electronics = Electronics,
            Furniture = Furniture
            )
        add_details.save()
        return add_details