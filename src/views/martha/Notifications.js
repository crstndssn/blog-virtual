import React, { useEffect , useState} from 'react'
import { store } from '../../firebase'

const Notifications = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const { docs } = await store.collection('users').get()
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            console.log(newArray)
            setUser(newArray)
        }
        getPosts()
    }, [])

    return (
        <div className="container mx-auto">
            {
                user.length !== 0 ? (
                    user.map(item => (
                        <div key={item.id} className="w-full border-2 border-gray-200 rounded-xl p-4 mb-2 flex justify-between items-center">
                            <div key={item.id} className="flex justify-center items-start w-full flex-col">
                                <p className="text-2xl font-medium">{item.name}</p>
                                <p className="text-base">{item.email}</p>
                            </div>
                        </div>

                    ))
                ) : (
                    <span className="w-full my-4 text-gray-400">
                        No usuarios
                    </span>
                )
            }
        </div>
    )
}

export default Notifications
