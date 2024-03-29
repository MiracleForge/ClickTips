import type { Metadata } from 'next'
import FormLogin from '@/components/formlogin/FormLogin';
export const metadata: Metadata = {
  title: 'Login'
}
const Login: React.FC = () => {
  return (
    <main className="w-full h-full my-0 md:my-10 mx-auto">
        <FormLogin/>
    </main>
  );
};

export default Login;