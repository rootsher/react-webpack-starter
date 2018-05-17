import React, { Component } from 'react';

import './index.component.scss';

import AlertDialog from '../../../core/components/examples/dialogs/alert-dialog/alert-dialog.component';

class IndexComponent extends Component<any, any> {
	render() {
		return <AlertDialog />;
	}
}

export const Index = IndexComponent;
