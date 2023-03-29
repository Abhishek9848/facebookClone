import { ErrorMessage, useField } from 'formik'
import { useMediaQuery } from 'react-responsive'
import './styles.css'

export default function RegisterInput({ placeholder, bottom, ...props }) {
    const [field, meta] = useField(props);
    const view1 = useMediaQuery({
        query: "(min-width:539px)"
    })
    const view2 = useMediaQuery({
        query: "(min-width:850px)"
    })
    const view3 = useMediaQuery({
        query: "(min-width:1170px)"
    })
    const test1 = view3 && field.name === "firstName"
    const test2 = view3 && field.name === "lastName"
    return (
        <div className='input_wrap register_input_wrap'>
            <input type={field.type} placeholder={placeholder} name={field.name} {...field} {...props}
                className={meta.touched && meta.error ? "input_error_border" : ""}
                style={{width:`${view1 && (field.name ==='firstName'|| field.name === "lastName") ? "100%" :
                view1 && (field.name === 'email' || field.name ==='password') ? "370px":"300px" 
                }`}}
            />
            {meta.touched
                && meta.error
                && <div className={view3 ? "input_error input_error_desktop" : 'input_error'} 
                style={{ transform: "translateY(1px)" , left:`${test1 ? "-173%" : test2 ? "107%" :""}`}}>
                    <ErrorMessage name={field.name} />
                    <div className={view3 && field.name !== "lastName" ? "error_arrow_left" : 
                    view3 && field.name === "lastName" ?"error_arrow_right" : 'error_arrow_bottom'}></div>
                </div>
            }
            {meta.touched && meta.error && <i className='error_icon'></i>}
        </div>
    )
}
