import { ErrorMessage, useField } from 'formik'
import {useMediaQuery} from 'react-responsive'
import './styles.css'

export default function LoginInput({ placeholder,bottom, ...props }) {
    const [field, meta] = useField(props);
    const desktopView =useMediaQuery({
        query:"(min-width:850px)"
    })
    return (
        <div className='input_wrap'>

            {meta.touched
                && !bottom
                && meta.error
                && <div className={desktopView ? "input_error input_error_desktop" :'input_error'} style={{transform:"translateY(3px)"}}>
                <ErrorMessage name={field.name} />
                    <div className={desktopView ? "error_arrow_left" :'error_arrow_top'}></div>
                </div>
            }
            <input type={field.type} placeholder={placeholder} name={field.name} {...field} {...props}
                className={meta.touched && meta.error ? "input_error_border":""}
            />
            {meta.touched
                && bottom
                && meta.error
                && <div className={desktopView ? "input_error input_error_desktop" : 'input_error'} style={{ transform: "translateY(1px)" }}>
                <ErrorMessage name={field.name} />
                    <div className={desktopView ? "error_arrow_left" : 'error_arrow_bottom'}></div>
                </div>
            }
            {meta.touched && meta.error && <i className='error_icon' style={{top:`${!bottom && !desktopView && "63%"}`}}></i>}
        </div>
    )
}
