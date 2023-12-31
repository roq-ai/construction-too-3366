import * as yup from 'yup';

export const rentalOrderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  tool_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
