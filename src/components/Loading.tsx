import { Spinner } from "./ui/spinner"


const Loading:React.FC = () => {
  return (
    <div className="flex items-center mx-auto text-gray-400 text-center justify-center gap-4 text-3xl max-w-[300px]"><Spinner className="size-8" /> Loading....</div>
  )
}

export default Loading