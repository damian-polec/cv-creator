export const updateState = (state, event) => {
  const index = state.findIndex(el => el.name === event.target.name);
  const itemData = state[index];
  itemData.value = event.target.value;
  if (event.target.value.length > 0) {
    itemData.isFilled = true
  } else {
    itemData.isFilled = false
  };
  
  const updated = [
    ...state
  ];
  
  updated[index] = itemData;
  return updated
}  