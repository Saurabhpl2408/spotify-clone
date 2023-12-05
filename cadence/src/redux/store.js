import {configureStore} from 'react-redux';
import playerReducer from './features/playerReducer';
import { spotifyAPI } from './services/spotifyAPI';

export const store = configureStore({
    reducer:{[spotifyAPI.spotifyAPI] : spotifyAPI.reducer,
    player:playerReducer},
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(spotifyAPI.middleware))

}
);