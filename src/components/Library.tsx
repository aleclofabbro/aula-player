import { StatelessComponent } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Song } from '../redux-engine/src/types/models';
import * as React from 'react';
export interface State {
  songs: Song[];
  currentSongId: Song['id'] | null;
}

export interface Actions {
  selectSong: (songId: Song['id']) => void;
}

export type Props = Actions & State;

export const Library: StatelessComponent<Props> =  (props) => {
  const selectSong = (id: Song['id']) => {
    if ( props.currentSongId !== id ) {
      props.selectSong(id);
    }
  };
  return (
    <List>
      <Subheader>Songs</Subheader>
      {props.songs.map(song => (
        <ListItem
          onClick={() => selectSong(song.id)}
          key={song.id}
          leftAvatar={<Avatar src={song.imgUrl} />}
          primaryText={`${song.title}`}
          rightIcon={<span>{song.author}</span>}
        />
      ))}
    </List>
  );
};