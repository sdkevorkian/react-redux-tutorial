import store from '../js/store/index';
import { addArticle } from './actions';

console.log('test')
window.store=store;
window.addArticle = addArticle;