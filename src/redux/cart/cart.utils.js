export const preventDuplicates = (existingCartItems, newItem) => {
  const alreadyExists = existingCartItems.find(
    (item) => item.id === newItem.id
  );

  if (alreadyExists) {
    return existingCartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...existingCartItems, { ...newItem, quantity: 1 }];
  }
};

export const decreaseItemCount = (existingCartItems, itemToDecrease) => {
  const alreadyExists = existingCartItems.find(
    (item) => item.id === itemToDecrease.id
  );
  if (alreadyExists.quantity === 1) {
    return existingCartItems.filter(
      (cartItem) => cartItem.id !== itemToDecrease.id
    );
  } else {
    return existingCartItems.map((cartItem) =>
      cartItem.id === itemToDecrease.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem
    );
  }
};
