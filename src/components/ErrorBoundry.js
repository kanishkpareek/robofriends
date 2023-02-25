import React, { Component } from 'react';

class ErrorBoundry extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: "There is Some Issue at our Servers. Our Team are working on it. Thank you for your Patience"
        };
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="alert alert-danger" role="alert">
                    <p className="yellow f3 pa4">{this.state.errorMessage}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundry;