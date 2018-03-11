import { StatelessComponent } from 'react';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Song } from '../redux-engine/src/types/models';
import * as React from 'react';
import { Slider, Paper, FloatingActionButton } from 'material-ui';

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
  let audioElem: HTMLAudioElement;
  const audioElementRef = (elem: HTMLAudioElement) => {
    audioElem = elem;
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
  let newCurrentTime = time;
  // tslint:disable-next-line:no-any
  const seek = (ev: any, newPosition: number) => {
    newCurrentTime = songLenght * newPosition;
  };
  const setNewPosition = () => {
    audioElem.currentTime = newCurrentTime;
    if ( newCurrentTime < songLenght) {
      setTime(newCurrentTime);
    }
  };
  const playStopButon = (
    <FloatingActionButton>
      {playing ? 'stop' : 'play'}
    </FloatingActionButton>
  );
  return (
    <Paper style={paperStyle} zDepth={1} rounded={false}>
    {
      song
        ? (
          <div>
            <Subheader>{song.title} : {song.author}</Subheader>
              <ListItem
                leftAvatar={<span onClick={togglePlay}>{playStopButon}</span>}
                primaryText={<Slider
                  value={playTimeRatio}
                  onDragStop={setNewPosition}
                  onChange={seek}
                />}
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