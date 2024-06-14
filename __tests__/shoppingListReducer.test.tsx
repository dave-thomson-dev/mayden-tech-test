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
      { id: 1, title: 'Apples', quantity: 3, price: 1.2 },
      { id: 2, title: 'Bananas', quantity: 2, price: 0.5 },
      { id: 3, title: 'Carrots', quantity: 5, price: 0.7 },
    ];

    const action = {
      type: 'delete_item',
      item: { id: 2 },
    };

    const expectedState = [
      { id: 1, title: 'Apples', quantity: 3, price: 1.2 },
      { id: 3, title: 'Carrots', quantity: 5, price: 0.7 },
    ];

    const newState = shoppingListReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should not modify the state if the item to delete does not exist', () => {
    const initialState = [
      { id: 1, title: 'Apples', quantity: 3, price: 1.2 },
      { id: 2, title: 'Bananas', quantity: 2, price: 0.5 },
      { id: 3, title: 'Carrots', quantity: 5, price: 0.7 },
    ];

    const action = {
      type: 'delete_item',
      item: { id: 4 },
    };

    const expectedState = initialState;

    const newState = shoppingListReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });  
});