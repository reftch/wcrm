/**
 * Public libray API 
 */

export interface ViewComponentProps {
  id: string;
  instance?: object;
	icon?: string;
}

export interface FrameProps {
	id: string;
	title?: string;
	top: number;
	left: number;
	width: number;
	height: number;
	active?: boolean;
	resizable?: boolean;
	moveable?: boolean;
	closeable?: boolean; 
}

export interface DesktopManagementProps {
	desktops: DesktopProps[];
	components: ViewComponentProps[];
}

export interface DesktopProps {
	active: boolean;
	frames: FrameProps[];
	components: ViewComponentProps[];
} 

