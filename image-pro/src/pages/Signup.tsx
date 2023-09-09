import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  console.log({email, password})
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Image Pro</h1>
      <p className="py-6">Signup to share your photos to the world!</p>
    </div>
    <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </form>
  )
}

export default Signup