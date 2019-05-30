import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import CHARACTERISTICS from 'utils/characteristics';
import ACTION_TYPE from 'reducers/actionType';
import asFormField from 'components/hoc/FormField';
class Character extends Component {
	onChange = (e) => {
		console.log('checbox: ', e);
		this.props.dispatch({
			type: ACTION_TYPE.characteristics,
			data: { characteristics: e }
		});
	};
	render() {
		return (
			<Checkbox.Group
				options={CHARACTERISTICS}
				value={this.props.characteristics}
				onChange={this.onChange}
				className="large-checkbox"
			/>
		);
	}
}

const mapStateToProps = (store) => {
	const { characteristics } = store.characteristicReducer;
	return { characteristics: characteristics };
};

export default asFormField(
	connect(mapStateToProps)(Character),
	'What characteristics do you associated with this student?'
);
