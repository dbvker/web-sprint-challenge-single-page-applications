// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string(),
    sauce: yup
        .string()
        .oneOf(['Red', 'Ranch', 'BBQ', 'Alfredo'], 'A sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    tomatoes: yup.boolean(),
    olives: yup.boolean(),
    glutenFree: yup.boolean(),
    special: yup.string(),
    numOfPizzas: yup
        .number()
        .min(1, 'Quantity must be at least 1')
});

export default formSchema;