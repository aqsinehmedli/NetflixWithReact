import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const themeStore = create(
    persist(
        set => (
            {
                theme: "light",
                accessToken: "",
                refreshToken: "",
                toggle: () => set((prevstate) => ({ ...prevstate, theme: prevstate.theme === "light" ? "dark" : "light" })),
                addAccessToken: (token) => set((prevstate) => ({ ...prevstate, accessToken: token })),
                addRefreshToken: (token) => set((prevstate) => ({ ...prevstate, refreshToken: token }))
            }
        )
    ))