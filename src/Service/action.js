export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const ADD_TO_READ = 'ADD_TO_READ';
export const MOVE_TO_UNREAD = 'MOVE_TO_UNREAD';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const addFavorite = (item) => ({
  type: ADD_FAVORITE,
  payload: item,
});

export const deleteFavorite = (itemId) => ({
  type: DELETE_FAVORITE,
  payload: itemId,
});

export const addToRead = (item) => ({
  type: ADD_TO_READ,
  payload: item,
});

export const moveToUnread = (itemId) => ({
  type: MOVE_TO_UNREAD,
  payload: itemId,
});
