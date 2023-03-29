import * as Yup from 'yup'

export const loginValidation = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is requierd").min(5)
})

export const registerationValidation = Yup.object({
    firstName:Yup.string().required("what's your first name ?")
    .min(2,"First name must be between 2 and 16 characters.")
    .max(16,"First name must be between 2 and 16 characters.")
    .matches(/^[aA-zZ]+$/,"Numbers and special characters are not allowed."),
    lastName: Yup.string().required("what's your last name ?")
        .min(2, "Last name must be between 2 and 16 characters.")
        .max(16, "Last name must be between 2 and 16 characters.")
        .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    email:Yup.string().email("Enter valid email address").required("you'll need this when you log in and if you ever need to reset your password."),
    password:Yup.string().required('Enter a combination of least six numbers, letters and punctuation marks(such as ! and &).')
    .min(6 , "Password must be atleast 6 characters.")
    .max(16 , "Password can't be more than 16 characters."),
    gender:Yup.string().required('Gender is required')
})