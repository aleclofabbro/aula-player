import { StatelessComponent } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Song } from '../redux-engine/src/types/models';
import * as React from 'react';
export interface Props {
  songs: Song[];
}

export const Library: StatelessComponent<Props> =  (props) => {

  return (
    <List>
      <Subheader>Songs</Subheader>
      {props.songs.map(song => (
        <ListItem
          key={song.id}
          leftAvatar={<Avatar src={song.imgUrl} />}
          primaryText={`${song.title}`}
          rightIcon={<span>{song.author}</span>}
        />
      ))}
    </List>
  );
};