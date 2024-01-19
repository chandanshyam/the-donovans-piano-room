export default function SignUp() {
    return (
      <section>
        <h2>Sign Up</h2>
      <form>
      <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Type your first name"
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Type your last name"
        />
        <label htmlFor="inputEmail">E-mail address:</label>
        <input
          type="e-mail"
          name="inputEmail"
          placeholder="Type your e-mail:"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create your password"
        />
        <label htmlFor="confirmPassword">Confirm your password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Create your password"
        />

        <button>
          Sign Up</button>
      </form>
      </section>
    );
  }
  