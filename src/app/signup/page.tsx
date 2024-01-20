export default function SignUp() {
  return (
    <section className="flex flex-col items-center justify-center w-96 px-4 py-8 mx-auto md:h-screen ">
    <section className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">Sign Up</h1>
      <form className="space-y-4 md:space-y-6 w-80" action="#">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            First Name:
          </label>
          <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            type="text"
            name="firstName"
            placeholder="Type your first name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Last Name:
          </label>
          <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            type="text"
            name="lastName"
            placeholder="Type your last name"
          />
        </div>
        <div>
          <label
            htmlFor="inputEmail"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            E-mail address:
          </label>
          <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            type="e-mail"
            name="inputEmail"
            placeholder="Type your e-mail:"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            type="password"
            name="password"
            placeholder="Create your password"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Confirm your password
          </label>
          <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            type="password"
            name="confirmPassword"
            placeholder="Create your password"
          />
        </div>
        <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente">Create an account</button>
      </form>
    </section>
    </section>
  );
}
