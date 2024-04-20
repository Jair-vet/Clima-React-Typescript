import { ReactNode } from "react";

export default function Alert({children} : {children : ReactNode}) {
  return (
    <div className="text-center text-red-800 bg-red-300 p-2 rounded-lg mb-2 uppercase">{children}</div>
  )
}