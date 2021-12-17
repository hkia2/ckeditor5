/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ListStyle from '../src/liststyle';
import ListPropertiesEditing from '../src/listpropertiesediting';
import ListPropertiesUI from '../src/listpropertiesui';

describe( 'ListStyle', () => {
	it( 'should be named', () => {
		expect( ListStyle.pluginName ).to.equal( 'ListStyle' );
	} );

	it( 'should require ListPropertiesEditing and ListPropertiesUI', () => {
		expect( ListStyle.requires ).to.deep.equal( [ ListPropertiesEditing, ListPropertiesUI ] );
	} );
} );
