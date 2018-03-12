import { StatelessComponent } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Song } from '../redux-engine/src/types/models';
import * as React from 'react';
import { Badge } from 'material-ui';
export interface State {
  songs: Song[];
  currentSongId: Song['id'] | null;
  clientsListenings: Song['id'][];
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
      {props.songs.map(song => {
        const listenings = props.clientsListenings.filter(id => id === song.id).length;
        return (
          <ListItem
            onClick={() => selectSong(song.id)}
            style={{padding: '0 20px'}}
            key={song.id}
            rightIcon={<Badge
              badgeContent={<span title={'users listening to this song'}>
                {listenings}
              </span>}
            />}
            primaryText={`${song.title}`}
            secondaryText={song.author}
          />
        );
      })}
    </List>
  );
};