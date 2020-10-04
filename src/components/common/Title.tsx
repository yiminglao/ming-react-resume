import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Title = ({ value, subTitle = null }) => {
	return (
		<Grid item xs>
			<Typography variant='h4' component='p' display='block'>
				{value}
			</Typography>
			{subTitle && (
				<Typography variant='h4' component='p' display='block'>
					{subTitle}
				</Typography>
			)}
		</Grid>
	);
};

export default Title;
