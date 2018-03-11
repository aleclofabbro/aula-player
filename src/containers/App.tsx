import { connect, MapStateToProps } from 'react-redux';
import { State } from '../redux-engine/src/reducers/aulaPlayerApp';
import { App as View, Props } from '../components/App';

const mapStateToProps: MapStateToProps<Props, {}, State> = state => {
  return {
    songs: state.songs.library,
    player: {
      playing: state.status.songPlaying,
      song: state.songs.selected,
      time: state.status.playTime,
      songLenght: state.status.songLenght
    },
    loadingLib: state.status.loadingLibrary
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
