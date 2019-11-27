import React, { Component } from 'react';
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";

export class Editor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "Bob",
			email: "",
			terms: false,
			flavor: "Vanilla",
			twoScoops: false
		}
		this.rules = {
			name: { required: true, minlength: 3, alpha: true },
			email: { required: true, email: true },
			order: { required: true },
			terms: { true: true}
		}
		this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
		this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"]
	}

	updateFormValue = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	updateFormValueOptions = (event) => {
		let options = [...event.target.options].filter(o => o.selected).map(o => o.vaue);
		this.setState({ [event.target.name]: options }, () => this.props.submit(this.state)); 
	}

	updateFormValueCheck = (event) => {
		this.setState({ [event.target.name]: event.target.checked });
	}

	render() {
return <div className="h5 bg-info text-white p-2">
<FormValidator data={ this.state } rules={ this.rules }
submit={ this.props.submit }>
<div className="form-group">
<label>Name</label>
<input className="form-control"
name="name"
value={ this.state.name }
onChange={ this.updateFormValue } />
<ValidationMessage field="name" />
</div>
<div className="form-group">
<div className="form-check">
<input className="form-check-input"
type="checkbox" name="terms"
checked={ this.state.terms }
onChange={ this.updateFormValueCheck } />
<label className="form-check-label">
Agree to terms
</label>
</div>
<ValidationMessage field="terms" />
</div>
</FormValidator>
</div>
}
}