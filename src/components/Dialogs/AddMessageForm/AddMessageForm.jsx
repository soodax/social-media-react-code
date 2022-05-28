import './AddMessageForm.scss';
import { Formik } from 'formik';
import sendMessageIcon from '../../../assets/images/sendMessageIcon.png';

const AddMessageForm = (props) => {

    let addMessage = (message) => {
        props.addMessage(message);
    }

    return (
        <Formik
            initialValues={{ message: '' }}
            onSubmit={(values, { setSubmitting }) => {
                addMessage(values.message);
                values.message = '';
                setSubmitting(false);

            }}>
            {({
                values,
                handleChange,
                handleSubmit,
                isSubmitting
            }) =>
            (<form className="dialogs__inputs" onSubmit={handleSubmit}>

                <input
                    className="dialogs__input"
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                    maxLength='64'
                />

                <button
                    className="dialogs__button"
                    type="submit"
                    disabled={isSubmitting}
                >
                    <img width={32} src={sendMessageIcon} alt="" />
                </button>
            </form>)}
        </Formik>
    )
}

export default AddMessageForm