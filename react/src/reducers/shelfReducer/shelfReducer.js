export default (state = [], payload) => {
  switch(payload.type) {
    case 'add':
      let moved = [payload.item]
      for (let i = 0; i < state.length; i += 1){
        if (state[i].id !== payload.item.id) {
          moved.push(state[i]);
        }
      }
      return moved;
    default:
      return state;
  }
}