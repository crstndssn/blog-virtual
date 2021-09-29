import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../../firebase'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const GetUsers = () => {



    useEffect(() => {
        const getPost = async () => {
            const { docs } = await store.collection('users').where('admin', '==', true).get()
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))

        }
    })

    return (
        <div>
            <div className="w-full border shadow flex justify-between items-center py-3 rounded-xl mt-5">
                <div>
                    <h1 className="text-xl font-medium px-10">User</h1>
                </div>
                <div>
                    <p className="text-xl font-medium">dussan29@gmail.com</p>
                </div>
                <div>
                    <Menu as="div" className="relative inline-block text-left">
                        {({ open }) => (
                            <>
                                <div className="mr-10">
                                    <Menu.Button className="flex items-center justify-center w-full rounded-full shadow px-3 py-2 bg-black font-medium text-white hover:bg-gray-900 focus:outline-none">
                                        Name
                                        <ChevronDownIcon className="w-5" aria-hidden="true" />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/porfile"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Profile
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/support"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Support
                                                    </Link>
                                                )}
                                            </Menu.Item>

                                            <form method="POST" action="#">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            type="submit"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block w-full text-left px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Sign out
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </form>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default GetUsers
