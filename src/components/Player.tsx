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
  setTime: (time: number) => void;
  setSongLenght: (time: number) => void;
}

export type Props = Actions & State;
const paperStyle = {
  margin: 20,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};
export const Player: StatelessComponent<Props> =  (props) => {
  const {
    song,
    playing,
    songLenght,
    time,
    play,
    stop,
    setTime ,
    setSongLenght
  } = props;
  const playTimeRatio = songLenght && time / songLenght;
  const togglePlay = playing ? stop : play;
  const audioElementRef = (elem: HTMLAudioElement) => {
    return elem && (playing ? elem.play() : elem.pause());
  };
  const timeUpdate = (ev: React.SyntheticEvent<HTMLAudioElement>) => {
    const currTime = ev.currentTarget.currentTime;
    if (currTime - time >= 1) {
      setTime(currTime);
    }
  };
  const formattedTime = `${Math.floor(time / 60)}: ${Math.floor(time % 60)}`;
  const loadedMetadata = (ev: React.SyntheticEvent<HTMLAudioElement>) => {
    setSongLenght(ev.currentTarget.duration);
  };
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
                rightAvatar={<span>{formattedTime}</span>}
              />
            <audio
              src={song.songUrl}
              autoPlay={true}
              ref={audioElementRef}
              onTimeUpdate={timeUpdate}
              onLoadedMetadata={loadedMetadata}
            />
          </div>
        )
        : null
      }
    </Paper>
    );
};