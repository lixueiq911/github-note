'use strict';

import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

class CommentBox extends React.Component{
	render(){
	
		return(
			<div className='ui comments'>
				<h1>评论</h1>
				<div className='ui divider'></div>
				<CommentList />
				<CommentForm />
			</div>
			
		)
	
	}
}
export {CommentBox as default};