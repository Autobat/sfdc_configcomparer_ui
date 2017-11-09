import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<div className="slds-page-header" role="banner">
					<div className="slds-grid">
						<div className="slds-col--padded slds-has-flexi-truncate">
							<div className="slds-media">
								<div className="slds-media__figure">
									<svg aria-hidden="true" className="slds-icon slds-icon--large slds-icon-standard-user">
										<use href="assets/icons/custom-sprite/svg/symbols.svg#custom73" />
									</svg>
								</div>
								<div className="slds-media__body">
									<p className="slds-text-heading--label">Autobat Tools</p>
									<div className="slds-grid">
										<h1 className="slds-text-heading--medium slds-m-right--small slds-truncate slds-align-middle" title="Record Title">SFDC Configuration Comparison Tool</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
