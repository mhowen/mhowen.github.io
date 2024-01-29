export default function() {
  return useState('formData', () => ({
    intent: 'INFO',
    name: 'Yung Name',
    email: 'default@email.com',
    phone: '',
    prefer_phone: false,
    category: 'uncategorized',
    message: '',
  }))
}

