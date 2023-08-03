import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import FilterIcon from '~/assets/icons/icon_filter.svg';
import PlayIcon from '~/assets/icons/icon_play.svg';
import PauseIcon from '~/assets/icons/icon_pause.svg';

type IconName = 'icon_filter' | 'icon_play' | 'icon_pause';

interface Props {
  name: IconName;
  fill?: string;
  stroke?: string;
  style?: StyleProp<ViewStyle>;
}

/**
 *@description return svg component
 */
function SVG({name, fill, stroke, style}: Props) {
  const props = {fill, stroke, style};

  switch (name) {
    case 'icon_filter':
      return <FilterIcon {...props} />;

    case 'icon_play':
      return <PlayIcon {...props} />;

    case 'icon_pause':
      return <PauseIcon {...props} />;

    default:
      return null;
  }
}

export default SVG;
