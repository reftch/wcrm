import AppManagement from './components/app-management';
import DesktopManagement from './components/desktop-management';
import FrameManagement from './components/frame-management';
import Desktop from './components/desktop';
import Divider from './components/divider';
import Frame from './components/frame';
import Button from './components/button';
import Checkbox from './components/checkbox';

// eslint-disable-next-line
const components: any = {
  wAppManagement: AppManagement,
  wDesktopManagement: DesktopManagement,
  wDesktop: Desktop,
  wDivider: Divider,
  wFrameManagement: FrameManagement,
  wFrame: Frame,
  wButton: Button,
  wCheckbox: Checkbox,
}

const Well = {
  
  // eslint-disable-next-line
  install(Vue: any, options = {}) {   
    console.log('Loading Well Vue Widets Library 0.1.0')
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
    });
  }

};

export default Well;

export interface Inter1 {
	active: boolean;
} 
