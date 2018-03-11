import { StatelessComponent } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Song } from '../redux-engine/src/types/models';
import * as React from 'react';
import { Slider } from 'material-ui';
export interface Props {
  song: Song | null;
  playing: boolean;
  time: number;
  songLenght: number;
}

export const Player: StatelessComponent<Props> =  (props) => {
  const { song, playing, songLenght, time} = props;
  const playTimeRatio = time / songLenght;
  return (
    <div>
    {
      song
        ? (
          <List>
            <Subheader>{song.title}</Subheader>
              <ListItem
                leftAvatar={<span>{playing ? 'stop' : 'play'}</span>}
                primaryText={<Slider value={playTimeRatio} />}
              />
          </List>
        )
        : null
      }
    </div>
    );
};