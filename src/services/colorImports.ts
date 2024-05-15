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

export function getColorImage(colorName: string): string {
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
      return rosegold;
    case 'rose gold':
      return rosegold;
    case 'sierrablue':
      return sierrablue;
    case 'silver':
      return silver;
    case 'skyblue':
      return skyblue;
    case 'sky blue':
      return skyblue;
    case 'spaceblack':
      return spaceblack;
    case 'spacegray':
      return spacegray;
    case 'space gray':
      return spacegray;
    case 'spacegray':
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
