import React from 'react';
import AdminLayout from '../../HOC/AdminLayout'

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className='user_dashboard'>
                <div>
                    this is your dashboard
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;