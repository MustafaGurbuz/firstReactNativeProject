import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import TweetFormReducer from './tweetFormReducer';
import TweetListReducer from './tweetListReducer';
import ContactFormReducer from './contactFormReducer';
import ContactListReducer from './contactListReducer';
import AnnoFormReducer from './annoFormReducer';
import AnooListReducer from './annoListReducer';

export default combineReducers({
  auth: AuthReducer,
  personForm: TweetFormReducer,
  personList: TweetListReducer,
  contactForm: ContactFormReducer,
  contactList: ContactListReducer,
  annoForm: AnnoFormReducer,
  annoList: AnooListReducer
});
