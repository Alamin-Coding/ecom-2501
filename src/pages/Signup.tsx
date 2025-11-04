import { signup } from "../constant/constant"


const Signup:React.FC = () => {
  return (
    <div>
        <div className="container mt-15">
            <div>
                <img src={signup} alt="image" />
            </div>
            <div className="py-[125px]">
                <h2>Create an account</h2>
                <p>Enter your details below</p>
            </div>
        </div>
    </div>
  )
}

export default Signup