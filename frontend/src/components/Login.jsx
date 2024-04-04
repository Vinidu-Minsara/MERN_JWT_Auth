import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login(){

    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    function handleChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/users/login', formData)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                setFormData({ email: '', password: '' });
                navigate('/dashboard');
            })
            .catch(err => {
                console.error(err.response);
            })
    }

    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-md ring-2 ring-light-wisteria-800/50 lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-light-wisteria-700">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text text-light-wisteria-500">Email</span>
                        </label>
                        <input type="text" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange}
                               className="w-full input input-bordered text-light-wisteria-400 placeholder-light-wisteria-400 border-light-wisteria-700 focus:border-light-wisteria-700"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text text-light-wisteria-500">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange}
                               className="w-full input input-bordered text-light-wisteria-400 placeholder-light-wisteria-400 border-light-wisteria-700 focus:border-light-wisteria-700"/>
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-light-wisteria-600">Forget
                        Password?</a>
                    <div>
                        <button
                            className="btn btn-block bg-light-wisteria-700 text-black hover:bg-light-wisteria-500">Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;