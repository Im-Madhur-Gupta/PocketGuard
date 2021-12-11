global base_cost 
base_cost = {
            'Fruits & Vegetables' : 3,
            'Fuel' : 2,
            'Clothes' : 4,
            'Transportation' : 5,
            'Entertainment' : 1,
            'Dining' : 3,
            'Leisure' : 2,
            'Grocery' : 1,
            'Electronics' : 1,
            'Furniture' : 1
        }

def reset_cost (Fruits_Vegetables , Fuel, Clothes, Transportation , Entertainment, Dining , Leisure, Grocery, Electronics, Furniture):
        global base_cost
        base_cost['Fruits & Vegetables'] = Fruits_Vegetables
        base_cost['Fuel'] = Fuel
        base_cost['Clothes'] = Clothes
        base_cost['Transportation'] = Transportation
        base_cost['Entertainment'] = Entertainment
        base_cost['Dining'] = Dining
        base_cost['Leisure'] = Leisure
        base_cost['Grocery'] = Grocery
        base_cost['Electronics'] = Electronics
        base_cost['Furniture'] = Furniture

def add_cost (commidity , present_cost , cycle_count, average_cost ):
        print(commidity)
        print(present_cost)
        print(cycle_count)
        print(average_cost)
        global base_cost
        if cycle_count == 0:
            if commidity in base_cost:
                return base_cost[commidity] , 1
            else:
                return 5, 1
        else:
            update = ((average_cost * cycle_count) + present_cost) / (cycle_count + 1)
            return update , cycle_count + 1

print(add_cost('Fuel', 5, 20, 4))