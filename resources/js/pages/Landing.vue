<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold">Landing Page</h1>
        <p class="mt-2 text-slate-600">Vue SPA is working ✅</p>

        <div class="mt-6 flex gap-3">
            <router-link to="/rsvp" class="px-4 py-2 rounded-lg bg-slate-900 text-white">
                Go to RSVP
            </router-link>
            <a href="/login" class="px-4 py-2 rounded-lg border">
                Login
            </a>
        </div>
    </div>
</template>
