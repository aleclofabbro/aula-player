import { StatelessComponent } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Song } from '../redux-engine/src/types/models';
import * as React from 'react';
import { Slider, Paper } from 'material-ui';
export interface State {
  song: Song | null;
  playing: boolean;
  time: number;
  songLenght: number;
}
export interface Actions {
  play: () => void;
  stop: () => void;
}

export type Props = Actions & State;
const paperStyle = {
  margin: 20,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};
export const Player: StatelessComponent<Props> =  (props) => {
  const { song, playing, songLenght, time, play, stop} = props;
  const playTimeRatio = songLenght && time / songLenght;
  const togglePlay = playing ? stop : play;
  return (
    <Paper style={paperStyle} zDepth={1} rounded={false}>
    {
      song
        ? (
          <div>
            <Subheader>{song.title} : {song.author}</Subheader>
              <ListItem
                leftAvatar={<span onClick={togglePlay}>{playing ? 'stop' : 'play'}</span>}
                primaryText={<Slider value={playTimeRatio} />}
              />
          </div>
        )
        : null
      }
    </Paper>
    );
};