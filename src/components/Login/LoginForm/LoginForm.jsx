import { Formik } from "formik";
import './LoginForm.scss';

const LoginForm = ({ login }) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', checkbox: false, }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                login(values.email, values.password, values.checkbox);
            }}>
            {({
                values,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) =>
            (<form onSubmit={handleSubmit}>
                <input
                    className='login__text login__input'
                    type={'email'}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                />
                <input
                    className='login__text login__input'
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={values.password}
                />
                <div className='login__checkbox'>
                    Stay in
                    <input
                        type="checkbox"
                        name="checkbox"
                        onChange={handleChange}
                        value={values.checkbox}
                    />
                </div>
                <button
                    className="login__button login__input"
                    type="submit"
                    disabled={isSubmitting}
                >
                    Submit
                </button>
            </form>)}

        </Formik>
    )
}

export default LoginForm;