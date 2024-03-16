import { configureStore } from '@reduxjs/toolkit';
import { messageSlice } from '../features/messageSlice';
import { photoSlice } from '../features/photoSlice';
import { threePhotoSlice } from '../features/threePhotoSlice';
import {themeSlice} from '../features/themeSlice'


export const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
    photo: photoSlice.reducer,
    threePhoto: threePhotoSlice.reducer,
    theme: themeSlice.reducer
  },
});
