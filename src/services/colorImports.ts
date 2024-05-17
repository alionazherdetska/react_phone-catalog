/* eslint-disable max-len */
import black from '../assets/layout/colors/black.svg';
import blue from '../assets/layout/colors/blue.svg';
import coral from '../assets/layout/colors/coral.svg';
import gold from '../assets/layout/colors/gold.svg';
import graphite from '../assets/layout/colors/graphite.svg';
import green from '../assets/layout/colors/green.svg';
import midnight from '../assets/layout/colors/midnight.svg';
import midnightgreen from '../assets/layout/colors/midnightgreen.svg';
import pink from '../assets/layout/colors/pink.svg';
import purple from '../assets/layout/colors/purple.svg';
import red from '../assets/layout/colors/red.svg';
import rosegold from '../assets/layout/colors/rosegold.svg';
import sierrablue from '../assets/layout/colors/sierrablue.svg';
import silver from '../assets/layout/colors/silver.svg';
import skyblue from '../assets/layout/colors/sky-blue.svg';
import spaceblack from '../assets/layout/colors/spaceblack.svg';
import spacegray from '../assets/layout/colors/spacegray.svg';
import starlight from '../assets/layout/colors/starlight.svg';
import yellow from '../assets/layout/colors/yellow.svg';
import white from '../assets/layout/colors/white.svg';

import black_active from '../assets/layout/colors/active/black_active.svg';
import blue_active from '../assets/layout/colors/active/blue_active.svg';
import coral_active from '../assets/layout/colors/active/coral_active.svg';
import gold_active from '../assets/layout/colors/active/gold_active.svg';
import graphite_active from '../assets/layout/colors/active/graphite_active.svg';
import green_active from '../assets/layout/colors/active/green_active.svg';
import midnight_active from '../assets/layout/colors/active/midnight_active.svg';
import midnightgreen_active from '../assets/layout/colors/active/midnightgreen_active.svg';
import pink_active from '../assets/layout/colors/active/pink_active.svg';
import purple_active from '../assets/layout/colors/active/purple_active.svg';
import red_active from '../assets/layout/colors/active/red_active.svg';
import rosegold_active from '../assets/layout/colors/active/rosegold_active.svg';
import sierrablue_active from '../assets/layout/colors/active/sierrablue_active.svg';
import silver_active from '../assets/layout/colors/active/silver_active.svg';
import skyblue_active from '../assets/layout/colors/active/sky-blue_active.svg';
import spaceblack_active from '../assets/layout/colors/active/spaceblack_active.svg';
import spacegray_active from '../assets/layout/colors/active/spacegray_active.svg';
import starlight_active from '../assets/layout/colors/active/starlight_active.svg';
import yellow_active from '../assets/layout/colors/active/yellow_active.svg';
import white_active from '../assets/layout/colors/active/white_active.svg';

export function getColorImage(colorName: string, active: boolean): string {
  if (active) {
    switch (colorName) {
      case 'black':
        return black_active;
      case 'blue':
        return blue_active;
      case 'coral':
        return coral_active;
      case 'gold':
        return gold_active;
      case 'graphite':
        return graphite_active;
      case 'green':
        return green_active;
      case 'midnight':
        return midnight_active;
      case 'midnightgreen':
        return midnightgreen_active;
      case 'pink':
        return pink_active;
      case 'purple':
        return purple_active;
      case 'red':
        return red_active;
      case 'rosegold':
        return rosegold;
      case 'rose gold':
        return rosegold;
      case 'rose gold':
        return rosegold_active;
      case 'sierrablue':
        return sierrablue_active;
      case 'silver':
        return silver_active;
      case 'skyblue':
      case 'sky blue':
        return skyblue_active;
      case 'spaceblack':
        return spaceblack_active;
      case 'spacegray':
      case 'space gray':
        return spacegray_active;
      case 'starlight':
        return starlight_active;
      case 'yellow':
        return yellow_active;
      case 'white':
        return white_active;
      default:
        return '';
    }
  } else {
    switch (colorName) {
      case 'black':
        return black;
      case 'blue':
        return blue;
      case 'coral':
        return coral;
      case 'gold':
        return gold;
      case 'graphite':
        return graphite;
      case 'green':
        return green;
      case 'midnight':
        return midnight;
      case 'midnightgreen':
        return midnightgreen;
      case 'pink':
        return pink;
      case 'purple':
        return purple;
      case 'red':
        return red;
      case 'rosegold':
      case 'rose gold':
        return rosegold;
      case 'sierrablue':
        return sierrablue;
      case 'silver':
        return silver;
      case 'skyblue':
      case 'sky blue':
        return skyblue;
      case 'spaceblack':
        return spaceblack;
      case 'spacegray':
      case 'space gray':
        return spacegray;
      case 'starlight':
        return starlight;
      case 'yellow':
        return yellow;
      case 'white':
        return white;
      default:
        return '';
    }
  }
}
