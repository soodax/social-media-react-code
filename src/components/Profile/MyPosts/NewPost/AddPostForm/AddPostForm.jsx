import './AddPostForm.scss';
import { Formik } from 'formik';

const AddPostForm = (props) => {

    let addPost = (text) => {
        props.addPost(text);
    }

    return (
        <Formik
            initialValues={{ postText: '' }}
            onSubmit={(values, { setSubmitting }) => {
                addPost(values.postText);
                values.postText = '';
                setSubmitting(false);

            }}>
            {({
                values,
                handleChange,
                handleSubmit,
                isSubmitting
            }) =>
            (<form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="newPost__input"
                        type="text"
                        name="postText"
                        onChange={handleChange}
                        value={values.postText}
                    />
                </div>
                {/* <Button
                    endIcon={<PostAddIcon />}
                    className='action-btn'
                    variant='contained'
                    type="submit"
                    disabled={isSubmitting}
                >
                    Добавить пост
                </Button> */}
                <button
                    className="newPost__button button"
                    type="submit"
                    disabled={isSubmitting}
                >
                    Add post
                </button>

            </form>)}
        </Formik>
    )
}

{/* <button
className="newPost__button button"
type="submit"
disabled={isSubmitting}
>
Добавить пост
</button> */}

export default AddPostForm