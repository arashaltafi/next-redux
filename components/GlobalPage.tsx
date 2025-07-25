'use client'

import { setGlobalUsername, setGlobalTheme, setGlobalToken } from '@/libs/features/global/GlobalSlice'
import { useAppDispatch, useAppSelector } from '@/libs/Hooks'
import { useState } from 'react'

const GlobalPage = () => {
    const dispatch = useAppDispatch()

    const username = useAppSelector((state) => state.GlobalSlice.username)
    const theme = useAppSelector((state) => state.GlobalSlice.theme)
    const token = useAppSelector((state) => state.GlobalSlice.token)

    const [newUsername, setNewUsername] = useState(username)
    const [newTheme, setNewTheme] = useState<'light' | 'dark' | string>(theme)
    const [newToken, setNewToken] = useState(token)

    const handleSave = () => {
        dispatch(setGlobalUsername(newUsername))
        dispatch(setGlobalTheme(newTheme))
        dispatch(setGlobalToken(newToken))
    }

    return (
        <div className="w-full min-h-screen flex flex-col gap-16 p-16 items-center justify-start">
            <h1 className="text-5xl mb-16">App Settings</h1>

            <div className='w-full flex flex-wrap items-center justify-between gap-8'>
                <p className="text-lg bg-red-500 p-4 rounded-lg">
                    username: <span className='font-bold'>{username}</span>
                </p>
                <p className="text-lg bg-blue-500 p-4 rounded-lg">
                    theme: <span className='font-bold'>{theme}</span>
                </p>
                <p className="text-lg bg-green-500 p-4 rounded-lg">
                    token: <span className='font-bold'>{token}</span>
                </p>
            </div>

            <div className='flex flex-col gap-2 w-1/2'>
                <label className="text-lg">Username:</label>
                <input
                    className="border px-8 py-4 text-black bg-white rounded-xl"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
            </div>

            <div className='flex flex-col gap-2 w-1/2'>
                <label className="text-lg">Theme:</label>
                <select
                    className="border px-8 py-4 text-black bg-white rounded-xl"
                    value={newTheme}
                    onChange={(e) => setNewTheme(e.target.value as 'light' | 'dark')}
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>

            <div className='flex flex-col gap-2 w-1/2'>
                <label className="text-lg">Token:</label>
                <input
                    className="border px-8 py-4 text-black bg-white rounded-xl"
                    type="text"
                    value={newToken}
                    onChange={(e) => setNewToken(e.target.value)}
                />
            </div>

            <button
                className="btn-blue mt-4"
                onClick={handleSave}
            >
                Save Settings
            </button>
        </div>
    )
}

export default GlobalPage