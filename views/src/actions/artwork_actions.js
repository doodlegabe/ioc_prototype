import * as ArtworkActionTypes from '../action_types/artwork';

export const loadArtwork = data => {
    return {
        type: ArtworkActionTypes.LOAD_ARTWORK,
        data
    };
};

export const getSuggestions = data => {
    return {
        type: ArtworkActionTypes.GET_SUGGESTIONS,
        data
    };
};

export const browseBasedOnThis = () => {
    return {
        type: ArtworkActionTypes.BROWSE_BASED_ON_THIS
    };
};

export const relatedToMe = () => {
    return {
        type: ArtworkActionTypes.RELATED_TO_ME
    };
};

export const moreLikeThis = () => {
    return {
        type: ArtworkActionTypes.MORE_LIKE_THIS
    };
};

export const userNameClicked = () => {
    return {
        type: ArtworkActionTypes.USER_NAME_CLICKED
    };
};