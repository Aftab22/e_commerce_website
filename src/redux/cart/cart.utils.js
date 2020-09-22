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
