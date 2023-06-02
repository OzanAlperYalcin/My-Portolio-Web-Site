import { useRef } from 'react'
// import { useAuth } from '../../utils/users'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import HeadTitle from '../HeadTitle'
import UseEmail from '../utils/UseEmail'

function ContactForm() {
    // const user = useAuth()
    const form = useRef()
    const { loading, submitted, error, sendEmail } = UseEmail(process.env.REACT_APP_MAIL_API)
    const validationSchema = Yup.object({
        name: Yup.string().required('Zorunlu Alan'),
        email: Yup.string().required('Zorunlu Alan'),
        subject: Yup.string().required('Zorunlu Alan'),
        message: Yup.string().required('Zorunlu Alan')
    })
    const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting } = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            sendEmail({
                "Kullanıcı": values.name,
                "Email Adresi": values.email,
                "Konu": values.subject,
                Mesaj: values.message
            })
        }
    })

    return (
        <div className=' order-1 md:order-2 w-full lg:w-1/2'>
            <div ref={form} className="section ">
                <form onSubmit={handleSubmit}>
                    <div className='grid gap-y-2'>
                        <div className='flex items-center justify-between'>
                            <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                            {touched.name && errors.name && (<span className='text-red-400 text-xs'>{errors.name}</span>)}
                        </div>
                        <input type="text" name="name" id="name"
                            className={`login-input ${touched.name && errors.name ? "error" : ""}`}
                            value={values.name} onChange={handleChange} onBlur={handleBlur}
                        />
                        <div className='flex items-center justify-between'>
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            {touched.email && errors.email && (<span className='text-red-400 text-xs'>{errors.email}</span>)}
                        </div>
                        <input type="email" name="email" id="email"
                            className={`login-input ${touched.email && errors.email ? "error" : ""}`}
                            value={values.email} onChange={handleChange} onBlur={handleBlur}
                        />
                        <div className='flex items-center justify-between'>
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            {touched.subject && errors.subject && (<span className='text-red-400 text-xs'>{errors.subject}</span>)}
                        </div>
                        <input type="text" name="subject" id="subject"
                            className={`login-input ${touched.subject && errors.subject ? "error" : ""}`}
                            value={values.subject} onChange={handleChange} onBlur={handleBlur}
                        />
                        <div className='flex items-center justify-between'>
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            {touched.message && errors.message && (<span className='text-red-400 text-xs'>{errors.message}</span>)}
                        </div>
                        <textarea type="text" name="message" id="message" rows="6"
                            className={`login-input ${touched.message && errors.message ? "error" : ""}`}
                            value={values.message} onChange={handleChange} onBlur={handleBlur}
                        />
                        <button type="submit" className="btn-primary w-full hover:bg-brand-primary mt-1" disabled={isSubmitting}>Gönder!</button>
                        {loading && <span className='text-sm font-light text-brand-secondary'>Your message is sending.</span>}
                        {submitted && <span className='text-sm font-light text-green-500'>Your message arrived to me.</span>}
                        {error ? (<span className='text-sm font-light text-red-500'>Error: Code {error}</span>) : null}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm