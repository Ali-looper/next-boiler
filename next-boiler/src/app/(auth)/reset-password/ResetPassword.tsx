import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Password:', password);
  };

  return (
    <div className="bg-white w-[638px] h-auto p-[40px]  ">
      <h2 className="text-[25px] font-bold text-center text-[#07224D] leading-[30px]">
        Reset password
      </h2>

      <div className="mb-6">
        <label className="block text-gray-700 mb-4"> New Password</label>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          width="100%"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-4"> Confirm Password</label>
        <Input
          type="password"
          placeholder="Confirm Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          width="100%"
        />
      </div>
      <Button
        title="Reset Password"
        onClick={handleLogin}
        width="w-full"
        height="h-12"
        size="md"
        variant="primary"
        className="mt-4"
        hover="hover:bg-foundation-200"
      />
    </div>
  );
};

export default ResetPassword;
