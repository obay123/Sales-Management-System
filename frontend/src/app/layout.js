"use client"

import userApi from "@/api/UserApi";
import { useRouter } from "next/navigation";
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const router = useRouter();
  const {logout} = userApi();

  const handleLogout = async () => {
    try {
      await logout(); 
      router.push("/login"); 
    } catch (error) {
      console.error("Logout failed:", error.message);

    }
  };
  return (
    <html lang="en">
      <body>
        <h1>hello there</h1>
        <button onClick={handleLogout}>Logout</button>
        {children}
      </body>
    </html>
  );
}
