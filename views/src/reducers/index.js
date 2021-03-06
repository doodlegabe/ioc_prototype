import { combineReducers } from 'redux'
import FooterReducer from './footer';
import NavReducer from './nav';
import SignInReducer from './sign-in';
import SignUpReducer from './sign-up';
import ImageUploadReducer from './image-uploader';
import ArtworkReducer from './artwork';
import UserCardReducer from './user-card';
import SuggestionReducer from './suggestion';
import SuggestionsReducer from './suggestions';
import QuestReducer from './quest';
import QuestsReducer from './quests';
import UserInfoReducer from './user-info';
import MyArtworkReducer from './my-artwork';
import ArtworkCardReducer from './artwork-card';
import MyNotebooksReducer from './my-notebooks';
import NotebookReducer from './notebook';
import CreateNotebookFormReducer from './create-notebook-form';
import UploadSharedReducer from './upload-shared';
import ArtworkInNotebookReducer from './artwork-in-notebook';
import VideoBGReducer from './videoBG';
import WelcomeDialogReducer from './welcome-dialog';
import ExternalUserArtworksReducer from './external-user-artworks';
import ExternalUserHeaderReducer from './external-user-header';
import ExternalUserQuestsReducer from './external-user-quests';
import CalendarReducer from './calendar';
import MapBasicReducer from './basic-map';
import {reducer as toastrReducer} from 'react-redux-toastr'

export const mainReducer = combineReducers({
    Footer: FooterReducer,
    Nav: NavReducer,
    SignIn: SignInReducer,
    SignUp: SignUpReducer,
    ImageUploader: ImageUploadReducer,
    Artwork: ArtworkReducer,
    UserCard: UserCardReducer,
    UserInfo: UserInfoReducer,
    Suggestions: SuggestionsReducer,
    Suggestion: SuggestionReducer,
    Quest: QuestReducer,
    Quests: QuestsReducer,
    MyArtwork: MyArtworkReducer,
    ArtworkCard: ArtworkCardReducer,
    MyNotebooks: MyNotebooksReducer,
    Notebook: NotebookReducer,
    CreateNotebookForm :CreateNotebookFormReducer,
    UploadShared: UploadSharedReducer,
    ArtworkInNotebook: ArtworkInNotebookReducer,
    VideoBG: VideoBGReducer,
    WelcomeDialog: WelcomeDialogReducer,
    ExternalUserArtworks: ExternalUserArtworksReducer,
    ExternalUserHeader: ExternalUserHeaderReducer,
    ExternalUserQuests: ExternalUserQuestsReducer,
    Calendar: CalendarReducer,
    BasicMap: MapBasicReducer,
    toastr: toastrReducer
});
export default mainReducer;