import React, { Component } from 'react';

import '../styles/css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component {
    render () {
        return (
            <div className="Navbar">
                <div className="collapse" id="navbarToggle">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">Collapsed content</h4>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        );
    }
}

export default Navbar;