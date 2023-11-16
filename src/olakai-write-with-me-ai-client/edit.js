import React, { useState } from 'react';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Container } from '../pure/dist/my-lib'
import '../pure/dist/style.css'
import {
	PanelBody
} from '@wordpress/components';

import {
	InspectorControls	
} from '@wordpress/block-editor';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const insertBlock = (type, obj1 = null) => {
	switch(type) {
		case 'heading':
			{
				let insertedBlock = wp.blocks.createBlock('core/heading', {
					content: obj1,
				});
				wp.data.dispatch('core/block-editor').insertBlocks(insertedBlock);
			}
			break;
		case 'text':
			{
				let insertedBlock = wp.blocks.createBlock('core/paragraph', {
					content: obj1,
				});
				let group = wp.blocks.createBlock('core/group', {}, [insertedBlock]);
				wp.data.dispatch('core/block-editor').insertBlocks(group);
			}
			break;
	}
}

const insertTextAsBlocks = (text) => {
	let block = insertBlock('text', text);
	if (block) {
		wp.data.dispatch('core/block-editor').insertBlocks(block);
	} else {
		console.error("I couldn't add a new block for the following content", text)
	}
}	

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes, clientId}) {
	
	const onCloseIntentCallback = () => {
		wp.data.dispatch('core/block-editor').removeBlock(clientId);
	}

	const onIntentInjectCallback = (str) => {
		insertTextAsBlocks(str);
	  }
	
	  const onIntentQueryCallback = (str) => {
		if (str == null) {
			setAttributes( { response: [] } );
			return ;
		}
		
		setAttributes( { inputValue: str } );

		console.log('onIntentQuery', str)
	
		return new Promise((resolve, reject) => {
			jQuery.ajax({
				url: ajaxurl,
				type: 'POST',
				data: {
					action: 'custom_metabox_write_with_me_ai_ajax',
					method: 'inline',
					input: str,
					post_id: jQuery('#post_ID').val(),
				},
				success: function (content, textStatus, jqXHR) {
					debugger
					if (!content.success) {
						return reject("There was an error " + content.code);
					}

					console.log(content.data);
					// JSON.parse(JSON.parse(content.data.body).choices[0].message.content)
					// JSON.parse(content.data.body).choices[0].message.content
					let parsedContent = [ JSON.parse(content.data.body).choices[0].message.content ];
					setAttributes( { response: parsedContent } );
					resolve(parsedContent);
				},
				error: ( jqXHR, textStatus, errorThrown ) => {
					reject(errorThrown);
				}
			});
		});
	  }
	  
	  const container = Container(onIntentQueryCallback, onIntentInjectCallback, onCloseIntentCallback, attributes)

	  const inspector = (
	  	<InspectorControls>
			<PanelBody>My custom control</PanelBody>
		</InspectorControls>
		)
		
	return (		
		<div onMouseDown={ () => wp.data.dispatch('core/block-editor').selectBlock(clientId) }>
			{ inspector }
			{container}
		</div>
		
	);
}
