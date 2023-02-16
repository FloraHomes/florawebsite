import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = ({pageTitle, pageLink }) => {
    return (
        <section className="page-title">
        <div className="auto-container">
            <h1>{pageTitle}</h1>
            <ul className="bread-crumb clearfix">
                <li><Link to="/">home</Link></li>
                <li><Link to={`${"/"+pageLink}`}>{pageLink}</Link></li>
            </ul>
        </div>
    </section>
    );
}

export default PageTitle;
