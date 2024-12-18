import React, { useState } from "react";
import "./Queries.css"; // Add your styling here

const Queries = () => {
    const [queries, setQueries] = useState([
        {
            id: 1,
            user_name: "John Doe",
            user_type: "Customer",
            query_title: "Issue with Order #12345",
            query_description: "I received a damaged product. Please assist with a replacement.",
            query_date: "2024-12-01",
            status: "Not Resolved",
        },
        {
            id: 2,
            user_name: "Jane Smith",
            user_type: "Seller",
            query_title: "Payout Delay",
            query_description: "My last month’s payout hasn’t been credited yet. Please check.",
            query_date: "2024-12-02",
            status: "Not Resolved",
        },
        {
            id: 3,
            user_name: "Michael Brown",
            user_type: "Delivery Agent",
            query_title: "Address Not Found",
            query_description: "I couldn’t find the delivery address for Order #67890. Please assist.",
            query_date: "2024-12-03",
            status: "Not Resolved",
        },
        {
            id: 4,
            user_name: "Emily Davis",
            user_type: "Customer",
            query_title: "Refund Request",
            query_description: "I returned Order #45678 but haven’t received the refund yet.",
            query_date: "2024-12-04",
            status: "Not Resolved",
        },
        {
            id: 5,
            user_name: "David Wilson",
            user_type: "Seller",
            query_title: "Product Listing Issue",
            query_description: "I’m unable to update my product listings. Please check.",
            query_date: "2024-12-05",
            status: "Not Resolved",
        },
    ]);

    const [filter, setFilter] = useState("");

    // Function to toggle the status of a query
    const updateStatus = (id) => {
        setQueries((prevQueries) =>
            prevQueries.map((query) =>
                query.id === id
                    ? { ...query, status: query.status === "Not Resolved" ? "Solved" : "Not Resolved" }
                    : query
            )
        );
    };

    // Function to delete a query
    const deleteQuery = (id) => {
        setQueries((prevQueries) => prevQueries.filter((query) => query.id !== id));
    };

    // Filtered queries based on user_type
    const filteredQueries = queries.filter((query) =>
        filter ? query.user_type.toLowerCase() === filter.toLowerCase() : true
    );

    const unresolvedQueries = filteredQueries.filter((query) => query.status === "Not Resolved");
    const solvedQueries = filteredQueries.filter((query) => query.status === "Solved");

    return (
        <div className="queries-dashboard">
            <h1>Query Dashboard</h1>

            <div className="filter-container">
                <label>Filter by User Type: </label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="Customer">Customer</option>
                    <option value="Seller">Seller</option>
                    <option value="Delivery Agent">Delivery Agent</option>
                </select>
            </div>

            <div className="queries-columns">
                {/* Unresolved Queries */}
                <div className="queries-column">
                    <h2>Unresolved Queries</h2>
                    {unresolvedQueries.map((query) => (
                        <div key={query.id} className="query-box">
                            <h3>{query.query_title}</h3>
                            <p><strong>User Name:</strong> {query.user_name} ({query.user_type})</p>
                            <p><strong>Description:</strong> {query.query_description}</p>
                            <p><strong>Date:</strong> {query.query_date}</p>
                            <p><strong>Status:</strong> {query.status}</p>
                            <div className="query-actions">
                                <button onClick={() => updateStatus(query.id)}>Mark as Solved</button>
                                <button onClick={() => deleteQuery(query.id)} className="delete-btn">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Solved Queries */}
                <div className="queries-column">
                    <h2>Solved Queries</h2>
                    {solvedQueries.map((query) => (
                        <div key={query.id} className="query-box">
                            <h3>{query.query_title}</h3>
                            <p><strong>User Name:</strong> {query.user_name} ({query.user_type})</p>
                            <p><strong>Description:</strong> {query.query_description}</p>
                            <p><strong>Date:</strong> {query.query_date}</p>
                            <p><strong>Status:</strong> {query.status}</p>
                            <div className="query-actions">
                                <button onClick={() => updateStatus(query.id)}>Mark as Not Resolved</button>
                                <button onClick={() => deleteQuery(query.id)} className="delete-btn">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Queries;
