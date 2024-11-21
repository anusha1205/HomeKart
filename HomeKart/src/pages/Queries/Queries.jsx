import React, { useState } from 'react';
import './Queries.css';
import Footer from '../../componenets/Footer/Footer';

const Queries = () => {
    const [showNewQueryForm, setShowNewQueryForm] = useState(false);
    const [newQuery, setNewQuery] = useState({
        subject: '',
        description: ''
    });

    const [queries, setQueries] = useState([
        {
            id: 1,
            status: 'Open',
            subject: 'Product Delivery Delay (Demo)',
            date: '2024-03-15',
            description: 'My order #12345 is delayed by 5 days'
        },
        {
            id: 2,
            status: 'Resolved',
            subject: 'Payment Issue (Demo)',
            date: '2024-03-10',
            description: 'Double payment charged for order #67890'
        },
        {
            id: 3,
            status: 'In Progress',
            subject: 'Product Quality Concern (Demo)',
            date: '2024-03-13',
            description: 'Received damaged furniture'
        },
        {
            id: 4,
            status: 'Open',
            subject: 'Return Request (Demo)',
            date: '2024-03-14',
            description: 'Wrong color delivered'
        },
        {
            id: 5,
            status: 'Resolved',
            subject: 'Missing Parts (Demo)',
            date: '2024-03-08',
            description: 'Table legs missing in the package'
        }
    ]);

    const [filter, setFilter] = useState('all');

    const handleNewQuery = (e) => {
        e.preventDefault();
        const query = {
            id: queries.length + 1,
            status: 'Open',
            subject: newQuery.subject,
            date: new Date().toISOString().split('T')[0],
            description: newQuery.description
        };
        
        setQueries([query, ...queries]);
        setNewQuery({ subject: '', description: '' });
        setShowNewQueryForm(false);
    };

    const filteredQueries = filter === 'all'
        ? queries
        : queries.filter(query => query.status.toLowerCase() === filter);

    return (
        <>
            <div className="queries-container">
                <div className="queries-header-main">
                    <h1>Customer Support Queries</h1>
                    <button
                        className="new-query-button"
                        onClick={() => setShowNewQueryForm(true)}
                    >
                        Create New Query
                    </button>
                </div>

                {showNewQueryForm && (
                    <div className="new-query-modal">
                        <div className="modal-content">
                            <h2>Create New Query</h2>
                            <form onSubmit={handleNewQuery}>
                                <div className="form-group">
                                    <label>Subject:</label>
                                    <input
                                        type="text"
                                        value={newQuery.subject}
                                        onChange={(e) => setNewQuery({ ...newQuery, subject: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description:</label>
                                    <textarea
                                        value={newQuery.description}
                                        onChange={(e) => setNewQuery({ ...newQuery, description: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-buttons">
                                    <button type="submit" className="submit-query">Submit Query</button>
                                    <button
                                        type="button"
                                        className="cancel-query"
                                        onClick={() => setShowNewQueryForm(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className="queries-list">
                    <div className="queries-controls">
                        <h3>My Queries</h3>
                        <select
                            className="filter-queries"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all">All Queries</option>
                            <option value="open">Open</option>
                            <option value="in progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                        </select>
                    </div>

                    {filteredQueries.length === 0 ? (
                        <div className="no-queries">
                            <h3>No queries found</h3>
                            <p>There are no queries matching your filter criteria.</p>
                        </div>
                    ) : (
                        <div className="queries-grid">
                            {filteredQueries.map(query => (
                                <div key={query.id} className={`query-item ${query.status.toLowerCase()}`}>
                                    <div className="query-header">
                                        <span className="query-status">{query.status}</span>
                                        <span className="query-date">{query.date}</span>
                                    </div>
                                    <h4>{query.subject}</h4>
                                    <p className="query-description">{query.description}</p>
                                    <button className="view-details">View Details</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Queries;
