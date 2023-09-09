import { useEffect } from "react"

export default function WindowEvent () {
    useEffect(() => {
        const doubleClick = () => alert('double click')

        window.addEventListener('dblclick', doubleClick)

        return () => 
            window.removeEventListener('dblclick', doubleClick)
    }, [])
    return (
      <h2>Window event is active</h2>
    )
  }