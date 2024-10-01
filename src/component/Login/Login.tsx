import { Dialog } from '@headlessui/react';
import icon from '../../assets/slider-1.png'
import './Login.css'
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../Firebase';

type funType ={
    setLoginPop: React.Dispatch<React.SetStateAction<Boolean>>
}



const Login = ({setLoginPop}:funType) => {
    const googleSignin = async ()=>{
        try{
            await signInWithPopup(auth,googleProvider)
            setLoginPop(false)
        }
        catch(err)
        {
            console.log(err)
        }
    }
  return (
    <div>
      <Dialog open={true} onClose={() => setLoginPop(false)} className="relative z-10">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        {/* Full-screen container */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {/* Modal content */}
              <div className="bg-white px-6 py-5">
                <div className="flex justify-end">
                  {/* Close button */}
                  <button
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    onClick={() => setLoginPop(false)}
                  >
                    <span className="sr-only">Close</span>
                    &#10005;
                  </button>
                </div>
                
                {/* Icon and content */}
                <div className="text-center">
                  {/* You can replace this with the guitar icon */}
                  <div className="mx-auto mb-4">
                    <img
                      src={icon}
                      alt="Icon"
                      className="login-icon mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Help us become one of the safest places to buy and sell
                  </h3>
                  
                  {/* Dots for carousel indicators */}
                  <div className="flex justify-center my-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mx-1"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                  </div>

                  {/* Login Buttons */}
                  <div className="mt-5">
                    <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                      <span role="img" aria-label="phone" className="mr-2">📱</span> 
                      Continue with phone
                    </button>

                    <button className="mt-3 w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"  onClick={googleSignin}>
                      <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google Logo"
                        className="w-5 h-5 mr-2"
                       
                      />
                      Continue with Google
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="my-4 text-sm text-gray-500">OR</div>

                  {/* Email Login Link */}
                  <button className="text-blue-600 hover:underline">
                    Login with Email
                  </button>

                  {/* Footer */}
                  <div className="mt-5 text-xs text-gray-500">
                    All your personal details are safe with us. If you continue, you are accepting OLX Terms and Conditions and Privacy Policy.
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Login;
