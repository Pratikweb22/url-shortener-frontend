import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
       const { data: response } = await api.post(
          "/api/auth/public/register",
          data
        );
      reset();
      navigate('/login');
      toast.success('Registration Successful!');
    } catch (error) {
      console.log(error);
      toast.error('Registration Failed!');
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-50 mb-35 mt-20">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-[360px] sm:w-[450px] bg-white shadow-md border border-gray-200 rounded-md p-6 sm:p-8"
      >
        <h1 className=" text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center font-serif lg:text-3xl">
          Register Here
        </h1>

        <hr className="mt-2 mb-5 border-gray-300" />

        <div className="flex flex-col gap-4 text-black ">
          <TextField
            label="UserName"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Type your username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Type your email"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Type your password"
            register={register}
            min={6}
            errors={errors}
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 mt-6 rounded-sm transition duration-150 hover:text-slate-300 disabled:opacity-70"
        >
          {loader ? 'Loading...' : 'Register'}
        </button>

        <p className="text-center text-sm text-slate-700 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold underline hover:text-black"
          >
            <span className="text-btnColor"> Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
