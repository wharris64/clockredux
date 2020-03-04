import { combineReducers } from 'redux'
import clock from './clock'

const app = combineReducers({ clock })

export default app