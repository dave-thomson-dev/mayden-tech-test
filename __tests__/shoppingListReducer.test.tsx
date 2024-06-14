import { shoppingListReducer } from '../features/shopping-list/components/ShoppingList'
import { ShoppingItemType, ShoppingListType } from '../types'

describe('shoppingListReducer', () => {
  it('should add a new item to the shopping list', () => {
    const initialState: ShoppingListType = [];

    const newItem: ShoppingItemType = {
      id: 1,
      title: 'Bananas',
      quantity: 2,
      price: 0.20,
      isComplete: false
    };

    const action = {
      type: 'add_item',
      item: newItem,
    };

    const updatedState = shoppingListReducer(initialState, action);

    expect(updatedState).toHaveLength(1);
    expect(updatedState).toContainEqual(newItem);
  });

  it('should throw an error for unknown action type', () => {
    const initialState: ShoppingListType = [];

    const action = {
      type: 'unknown_action',
    };

    expect(() => shoppingListReducer(initialState, action)).toThrow(
      'Unknown action: unknown_action'
    );
  });

  it('should delete an item from the shopping list', () => {
    const initialState = [
      { id: 1, title: 'Apples', quantity: 3, price: 1.2, isComplete: false },
      { id: 2, title: 'Bananas', quantity: 2, price: 0.5, isComplete: false }, 
      { id: 3, title: 'Carrots', quantity: 5, price: 0.7, isComplete: false },
    ];

    const action = {
      type: 'delete_item',
      item: { id: 2 },
    };

    const expectedState = [
      { id: 1, title: 'Apples', quantity: 3, price: 1.2, isComplete: false },
      { id: 3, title: 'Carrots', quantity: 5, price: 0.7, isComplete: false },
    ];

    const newState = shoppingListReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should not modify the state if the item to delete does not exist', () => {
    const initialState = [
      { id: 1, title: 'Apples', quantity: 3, price: 1.2, isComplete: false },
      { id: 2, title: 'Bananas', quantity: 2, price: 0.5, isComplete: false },
      { id: 3, title: 'Carrots', quantity: 5, price: 0.7, isComplete: false },
    ];

    const action = {
      type: 'delete_item',
      item: { id: 4 },
    };

    const expectedState = initialState;

    const newState = shoppingListReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });  

  describe('shoppingListReducer', () => {
    it('should toggle the isComplete property of the specified item', () => {
      const initialState = [
        { id: 1, title: 'Apples', quantity: 2, price: 1.5, isComplete: false },
        { id: 2, title: 'Oranges', quantity: 1, price: 2.0, isComplete: false },
      ];
  
      const action = {
        type: 'toggle_item',
        id: 1,
        isComplete: true,
      };
  
      const updatedState = shoppingListReducer(initialState, action);
  
      expect(updatedState).toEqual([
        { id: 1, title: 'Apples', quantity: 2, price: 1.5, isComplete: true },
        { id: 2, title: 'Oranges', quantity: 1, price: 2.0, isComplete: false },
      ]);
    });
  
    it('should not change the state if the item id is not found', () => {
      const initialState = [
        { id: 1, title: 'Apples', quantity: 2, price: 1.5, isComplete: false },
        { id: 2, title: 'Oranges', quantity: 1, price: 2.0, isComplete: false },
      ];
  
      const action = {
        type: 'toggle_item',
        id: 3,
        isComplete: true,
      };
  
      const updatedState = shoppingListReducer(initialState, action);
  
      expect(updatedState).toEqual(initialState);
    });
  });  
});