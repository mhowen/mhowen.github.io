type ContactFormData = {
  name: string,
  email: string,
  tel?: string,
  category: string,
  message: string,
}

type ValidationError = {
  field: string,
  message: string,
}

type ValidationResponse = {
  data: ContactFormData,
  errors: ValidationError[],
}

function constructError(field: string, message: string): ValidationError {
  return ({
    field: field,
    message: message,
  })
}


// TODO: finish implementing client-side validation logic
// TODO: sanitize inputs
export function validateContactForm(rawData: ContactFormData): ValidationResponse {
  const errors: Array<ValidationError> = [];

  if (!rawData.name) errors.push(constructError('name', 'Field required!'))
  if (!rawData.email) errors.push(constructError('email', 'Field required!'))
  if (!rawData.category) errors.push(constructError('category', 'Field required!'))
  if (!rawData.message) errors.push(constructError('message', 'Field required!'))

  return ({
    data: rawData,
    errors: errors,
  })
}
