import { connect, MapStateToProps } from 'react-redux';
import { State } from '../redux-engine/src/reducers/aulaPlayerApp';
import { App as View, Props } from '../components/App';

const mapStateToProps: MapStateToProps<Props, {}, State> = state => {
  return {
    songs: []
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id));
//     }
//   };
// };
export const App = connect<Props, {}, {}, State>(mapStateToProps)(View);
