export default {
  config: {
    messages: {
      success: 'Registration Successful! Thanks for registration.',
      error:
        'An error occurred during registration. Please try again later.'
    },
    buttonText: 'Send',
    spinner: true
  },
  fields: [
    {
      // name - first name
      label: 'First Name',
      placeholder: 'First Name',
      required: true
    },
    {
      // location - last name
      label: 'Last Name',
      placeholder: 'Last Name',
      required: true
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your Email',
      required: true
    },
    {
      label: 'Education',
      // type: 'textarea',
      placeholder: 'Enter you Education.',
      required: true
    },
    {
      // Message - Bio
      label: 'Bio',
      type: 'textarea',
      placeholder: 'Tell us about yourself...',
      required: true
    },
    {
      label: 'Date of Birth',
      type: 'date',
      placeholder: 'Tell us about yourself...',
      required: true
    }
  ]
}
