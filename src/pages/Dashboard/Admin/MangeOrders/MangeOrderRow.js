import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Select from '../../../../components/Select';
import { useState } from 'react';
import { stringify } from 'postcss';
import Dropdown from '../../../../shared/Dropdown';



const MangeOrderRow = ({ order, setIsReload, reload, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()

    const { name, productName, price, quantity, paid, status, _id } = order;
    // const [selectedOption, setSelectedOption] = useState('');
    const options = [
        { value: 'pending', label: 'Pending' },
        { value: 'confirmed', label: 'Confirmed' },
        { value: 'delivered', label: 'Delivered' },
    ];
    const handleDelete = () => {
        const url = `https://nexiq-server.vercel.app/order/${_id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Successfully Deleted')
                    setIsOpen(false)
                    setIsReload(!reload)

                }
            })


    }

    const handleSelectChange = (event) => {
        const value = event.target.value;
        const json = JSON.stringify({ status: value })
        console.log(json);
        const url = `https://nexiq-server.vercel.app/order/${_id}`;

        fetch(url, {
            method: 'PUT',
            body: json,
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                console.log('res for all users', res);
                if (res.status === 403) {
                    toast.error('Failed to change')
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsReload(!reload)
                    toast.success('Successfully updated');
                }
            })

    };

    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Update the selected option state
    };



    return (
        <tr
            className="hover:bg-gray-50 dark:hover:bg-gray-600/50"
        >
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
                {index + 1}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
                {name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
                {productName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 capitalize font-semibold">
                {price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 capitalize font-semibold">
                {quantity}
            </td>
            <td >
                <div className='relative'>
                    <span className=" text-sm absolute z-30 bg-white text-gray-600 px-2 top-2 left-2 capitalize">{status}</span>
                    <Select className="w-28"
                        _id={_id}
                        options={options}
                        onChange={handleSelectChange} />
                </div>
            </td>
            <td className="block text-center py-4 text-sm font-medium">
                <Dropdown
                    toggleText=":"
                    dropBtnclassName="cursor-pointer"
                    dropdownclassName="relative z-50"
                    dropMenuclassName="bg-gray-200 absolute  top-5 left-[-15px] w-20 space-y-2 py-2"
                    defaultOpen={false}
                    onOptionClick={handleOptionClick} >
                    <div onClick={() => handleOptionClick("Option 1")}>Option 1</div>

                    <button onClick={() => handleDelete(_id)} className='flex items-center justify-center w-full gap-2'>
                        <span>Delete</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg></button>
                </Dropdown>
            </td>
        </tr >
    );
};

export default MangeOrderRow;