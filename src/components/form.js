import React from "react";

export default function App() {
    return (
        <form action="" class="mt-6">
            <div class="my-5 text-sm">
                <label for="username" class="block text-black">Username</label>
                <input type="text" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
            </div>
            <div class="my-5 text-sm">
                <label for="password" class="block text-black">Password</label>
                <input type="password" id="password" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                <div class="flex justify-end mt-2 text-xs text-gray-600">
                    <a href="../../pages/auth/forget_password.html  hover:text-black">Forget Password?</a>
                </div>
            </div>
            <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
        </form>
    );
}
