export default function() {
  return useState('formData', () => ({
    intent: 'INFO',
    name: '',
    email: '',
    phone: '',
    prefer_phone: false,
    category: 'uncategorized',
    message: '',
  }))
}

