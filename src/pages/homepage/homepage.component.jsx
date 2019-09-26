import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory-menu/directory-menu.component';

import { HomepageContainer } from './homepage.styles';


export const Homepage = () => {
	return (
		<HomepageContainer>
			<Directory/>
		</HomepageContainer>
 )
	
}
