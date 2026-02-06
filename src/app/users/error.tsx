"use client"
import { useEffect } from "react"

export default function ErrorPage({error} : {error : Error}){
    useEffect (() => {
        console.error(`${error}`);
    }, [error]);
    return (
        <div className="flex items-center justify-center h-scren">
            <div className="text-2xl text-red-500">Error Fetching user data</div>
        </div>
    )
}