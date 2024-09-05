import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HostelTable = () => {
    const [hostels, setHostels] = useState([]);

    useEffect(() => {
        const fetchHostels = async () => {
            try {
                const response = await axios.get('http://localhost:8000/hostels/show');
                console.log('API Response:', response.data); // Check the response data structure

                // Ensure the response is an array
                if (Array.isArray(response.data)) {
                    setHostels(response.data); // Set hostels state if response is an array
                } else {
                    console.error('Unexpected response format:', response.data);
                    setHostels([]); // Set to empty array if the response is not as expected
                }
            } catch (error) {
                console.error('Error fetching hostels:', error);
            }
        };

        fetchHostels();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/hostels/delete/${id}`);
            setHostels(hostels.filter(hostel => hostel._id !== id)); // Update the local state
            alert('Hostel deleted successfully');
        } catch (error) {
            console.error('Error deleting hostel:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Hostel List</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="w-full bg-gray-800 text-white">
                        <th className="py-2 px-4">Hostel Name</th>
                        <th className="py-2 px-4">Landline Number</th>
                        <th className="py-2 px-4">Mobile Number</th>
                        <th className="py-2 px-4">Address</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Attachments</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {hostels.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="text-center py-4">No hostels available</td>
                        </tr>
                    ) : (
                        hostels.map(hostel => (
                            <tr key={hostel._id} className="border-b hover:bg-gray-100">
                                <td className="py-2 px-4">{hostel.hostelName}</td>
                                <td className="py-2 px-4">{hostel.landlineNumber}</td>
                                <td className="py-2 px-4">{hostel.mobileNumber}</td>
                                <td className="py-2 px-4">{hostel.address}</td>
                                <td className="py-2 px-4">{hostel.email}</td>
                                <td className="py-2 px-4">
                                    {hostel.attachments && (
                                        <a href={`http://localhost:8000/${hostel.attachments}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                            View Attachment
                                        </a>
                                    )}
                                </td>
                                <td className="py-2 px-4">
                                    <button onClick={() => handleDelete(hostel._id)} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                    {/* Add any edit button or functionality here */}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HostelTable;
