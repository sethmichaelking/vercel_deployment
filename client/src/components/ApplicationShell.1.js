import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Sidebar from './Sidebar';
export default function ApplicationShell() {
    return (
        <div>
            <div className="antialiased bg-gray-50 dark:bg-gray-900">
                <Navbar />
                {/* <!-- Sidebar --> */}
                <Sidebar/>
                <Main/>
            </div>
        </div>
    );
}
