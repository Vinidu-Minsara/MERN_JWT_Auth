import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Signup() {

    const [formData, setFormData] = useState({name: '', email: '', password: ''});
    const navigate = useNavigate();

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        axios.post('http://localhost:3000/users/signup', formData)
            .then((res) => {
                console.log(res)
                setFormData({ name: '', email: '', password: '' });
                navigate("/login");
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-md ring-2 ring-light-wisteria-800/50 lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-light-wisteria-700">Signup</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text text-light-wisteria-500">Name</span>
                        </label>
                        <input type="text" placeholder="Enter the name" name="name" value={formData.name} onChange={handleChange}
                               className="w-full input input-bordered text-light-wisteria-400 placeholder-light-wisteria-400 border-light-wisteria-700 focus:border-light-wisteria-700"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text text-light-wisteria-500">Email</span>
                        </label>
                        <input type="text" placeholder="Enter the email Address" name="email" value={formData.email} onChange={handleChange}
                               className="w-full input input-bordered text-light-wisteria-400 placeholder-light-wisteria-400 border-light-wisteria-700 focus:border-light-wisteria-700"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text text-light-wisteria-500">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange}
                               className="w-full input input-bordered text-light-wisteria-400 placeholder-light-wisteria-400 border-light-wisteria-700 focus:border-light-wisteria-700"/>
                    </div>
                    <div>
                        <button
                            className="btn btn-block bg-light-wisteria-700 text-black mt-3 hover:bg-light-wisteria-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;